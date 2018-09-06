using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataRepository.Entities;
using DataRepository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TravelDesk.Controllers
{

    [Route("api/[controller]")]
    public class LookUpController : Controller
    {
        private readonly ILookUpRepository _lookuprepository;

        public LookUpController(ILookUpRepository lookuprepository)
        {

            _lookuprepository = lookuprepository;
        }

        [HttpGet("GetCountryList")]
        public List<LookUp> getCountryList()
        {

            return _lookuprepository.GetCountryList();


        }
    }
}