

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
    public class PassportController : Controller
    {
    //    private IUnitOfWork _unitofWork;
    //    private readonly IMapper _mapper;
    //    public PassportController(IUnitOfWork unitOfWork, IMapper mapper)
    //    {
    //        _mapper = mapper;
    //        _unitofWork = unitOfWork;
    //    }

    //    [HttpPost("AddPassport")]
    //    public void AddRequest([FromBody]PassportItem passportData)
    //    {

            
    //        PassportInfo passport=_mapper.Map<PassportItem, PassportInfo>(passportData);
            
    //        _unitofWork.PassportRepository.Add(passport);
    //        int i = _unitofWork.Complete();

    //    }

       
        
    //    [HttpGet("GetPassportDetails")]
    //    public PassportItem getPassportDetails(int id)
    //    {
    //        PassportItem passportData = new PassportItem();
    //        passportData = _mapper.Map<PassportInfo, PassportItem>(_unitofWork.PassportRepository.GetPassportDetails(id));
    //        return passportData;
    //    }

    //    [HttpPost("UpdatePassport")]
    //    public void UpdateRequest([FromBody]PassportItem passportData)
    //    {
    //        PassportInfo passport = _unitofWork.PassportRepository.Get(passportData.RequestInfoId);
    //        passport.PassportNumber = passportData.PassportNum;
    //        passport.PassportExpiryDate = passportData.PassportExpiryDate;
    //        passport.VisaNumber = passportData.VisaNum;
    //        passport.VisaExpiryDate = passport.VisaExpiryDate;
            
    //        int i = _unitofWork.Complete();
            
            
    //    }

    }
}
