using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataRepository.Entities;
using DataRepository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TravelDesk.Controllers
{

    
    [Route("api/[controller]")]
   
    public class UserController : Controller
    {
        private IUserRepository _userRepository { get; set; }

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;

        }

        [HttpGet("GetUserDetails")]
        public AppUser GetUserDetails(string UserId)
        {

            return _userRepository.GetUserDetails(UserId);

        }





    }
}