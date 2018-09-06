

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

using DataAccessRepository.Entities;
using Microsoft.AspNetCore.Mvc;
using TravelDesk.Models;
using TravelDesk.ViewModels;

namespace TravelDesk.Controllers
{
    [Route("api/[controller]")]
    public class ForexController : Controller
    {
        
        private readonly IMapper _mapper;
        public ForexController( IMapper mapper)
        {
            _mapper = mapper;
            
        }

        [HttpPost("AddForex")]
        public void AddForex([FromBody]ForexItem forexData)
        {


            ForexInfo forexCard =_mapper.Map<ForexItem, ForexInfo>(forexData);
            
            

        }

       
        
        [HttpGet("GetForexDetails")]
        public ForexItem GetForexDetails(int id)
        {
            ForexItem passportData = new ForexItem();
           
            return passportData;
        }

        [HttpPost("UpdateForex")]
        public void UpdateForex([FromBody]ForexItem forexItem)
        {
            
            
            
        }

    }
}
