
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DataAccessRepository.Entities;
using DataRepository.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using TravelDesk.Auth.Interfaces;
using TravelDesk.Helpers;
using TravelDesk.Models;
using TravelDesk.ViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelDesk.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {

        private readonly IAuthRepository _AuthRepository;
        private readonly IUserRepository _userRepository;

            public AuthController(IAuthRepository AuthRepository,IUserRepository userRepository)
            {
            _AuthRepository = AuthRepository;
            _userRepository = userRepository;

                
            }

            // POST api/auth/login
            [HttpPost("login")]
            public async Task<IActionResult> Post([FromBody]CredentialsViewModel credentials)
            {
                
                try
                {


                AppUserLogin LoggedInUser = _AuthRepository.Login(credentials.UserName, credentials.Password);

                if(LoggedInUser.LoginId != String.Empty)
                {

                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ABCneedtogetthisfromenvironmentXYZ"));
                    var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                    var tokeOptions = new JwtSecurityToken(
                        issuer: "http://localhost:50188",
                        audience: "http://localhost:50188",
                        claims: new List<Claim>(),
                        expires: DateTime.Now.AddMinutes(5),
                        signingCredentials: signinCredentials
                    );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                    return Ok(new { Token = tokenString, User= this._userRepository.GetUserDetails(LoggedInUser.LoginId) });
                }
                else
                {
                    return Unauthorized();
                }
            }
                catch (System.Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
                }

            }

        
    }
}
