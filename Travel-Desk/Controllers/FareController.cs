

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
    public class FareController : Controller
    {
        //private IUnitOfWork _unitofWork;
        //private readonly IMapper _mapper;
        //public FareController(IUnitOfWork unitOfWork, IMapper mapper)
        //{
        //    _mapper = mapper;
        //    _unitofWork = unitOfWork;
        //}

        //[HttpPost("AddFare")]
        //public void AddFare([FromBody] FareInfoViewModel fareInfoViewModel)
        //{
        //    List<FareInfo> _fareItems = _mapper.Map<List<FareItem>, List<FareInfo>>(fareInfoViewModel.fareItems);
        //    _unitofWork.FareRepository.AddFare(_fareItems);
        //    _unitofWork.Complete();

        //}

        //[HttpGet("GetFareForRequest")]
        //public FareInfoViewModel GetFareForRequest(int id)
        //{
        //    FareInfoViewModel fareOptions = new FareInfoViewModel();
        //    fareOptions.fareItems = _mapper.Map<List<FareInfo>, List<FareItem>>(_unitofWork.FareRepository.GetFareForRequest(id));

        //    return fareOptions;

        //}

        //[HttpPost("DeleteFare")]
        //public void DeleteFare([FromBody]List<int> deletedIDs)
        //{
        //   foreach(var id in deletedIDs)
        //    {
        //        _unitofWork.FareRepository.Remove(_unitofWork.FareRepository.Get(id));
                

        //    }
        //    _unitofWork.Complete();
        //}

        //[HttpPost("UpdateFare")]
        //public void UpdateFare([FromBody]FareInfoViewModel fareData)
        //{
        //    List<FareItem> fareItems = new List<FareItem>();
        //    fareItems.AddRange(fareData.fareItems);
            
            
        //    List<FareInfo> fareDataList = (_unitofWork.FareRepository.GetFareForRequest(fareItems.First().ReimbursementInfoId));
            
        //    foreach(var item in fareItems)
        //    {
        //        var refItem = fareDataList.FirstOrDefault(i => i.ReimbursementInfoId == item.ReimbursementInfoId);
        //        if(refItem!=null)
        //        {
        //            refItem.TravelMode = item.TravelMode;
        //            refItem.Date = item.Date;
        //            refItem.From = item.From;
        //            refItem.To = item.To;
        //            refItem.Currency = item.Currency;
        //            refItem.AmountSpent = item.AmountSpent;
                    
        //            refItem.Remark = item.Remarks;

        //        }
        //    }

        //    _unitofWork.Complete();

        //}

    }
}
