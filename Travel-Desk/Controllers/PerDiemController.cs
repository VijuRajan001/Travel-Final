

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
    public class PerDiemController : Controller
    {
        //private IUnitOfWork _unitofWork;
        //private readonly IMapper _mapper;
        //public PerDiemController(IUnitOfWork unitOfWork, IMapper mapper)
        //{
        //    _mapper = mapper;
        //    _unitofWork = unitOfWork;
        //}

        //[HttpPost("AddPerDiem")]
        //public void AddPerDiem([FromBody] PerDiemItem perDiemitem)
        //{
        //    PerDiemInfo _perDiemItem = _mapper.Map<PerDiemItem, PerDiemInfo>(perDiemitem);
        //    _unitofWork.PerDiemRepository.AddperDiemInfo(_perDiemItem);
        //    _unitofWork.Complete();

        //}

        //[HttpGet("GetPerDiemForRequest")]
        //public PerDiemViewModel GetPerDiemForRequest(int id)
        //{
        //    PerDiemViewModel perDiemOptions = new PerDiemViewModel();
        //    perDiemOptions.perDiemItems = _mapper.Map<List<PerDiemInfo>, List<PerDiemItem>>(_unitofWork.PerDiemRepository.GetPerDiemForRequest(id));

        //    return perDiemOptions;

        //}

        //[HttpPost("DeletePerDiem")]
        //public void DeletePerDiem([FromBody]List<int> deletedIDs)
        //{
        //   foreach(var id in deletedIDs)
        //    {
        //        _unitofWork.PerDiemRepository.Remove(_unitofWork.PerDiemRepository.Get(id));
                

        //    }
        //    _unitofWork.Complete();
        //}

        //[HttpPost("UpdatePerDiem")]
        //public void UpdatePerDiem([FromBody]PerDiemItem perDiemData)
        //{


        //    List<PerDiemInfo> perDiemDataList = (_unitofWork.PerDiemRepository.GetPerDiemForRequest(perDiemData.ReimbursementInfoId));


        //    var refItem = perDiemDataList.FirstOrDefault(i => i.PerDiemInfoId == perDiemData.Id);
        //        if(refItem!=null)
        //        {
        //        refItem.ArrivalDate = perDiemData.ArrivalDate;
        //            refItem.DepartureDate = perDiemData.DepartureDate;
        //            refItem.Currency = perDiemData.Currency;
        //            refItem.Eligibility = perDiemData.Eligibility;
        //            refItem.TotalDays = perDiemData.TotalDays;
        //            refItem.TotalAmount = perDiemData.TotalAmount;
        //            refItem.Remarks = perDiemData.Remarks;

        //        }
            

        //    _unitofWork.Complete();

        //}

    }
}
