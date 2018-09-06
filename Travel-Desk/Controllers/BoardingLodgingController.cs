

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
    public class BoardingLodgingController : Controller
    {
        //private IUnitOfWork _unitofWork;
        //private readonly IMapper _mapper;
        //public BoardingLodgingController(IUnitOfWork unitOfWork, IMapper mapper)
        //{
        //    _mapper = mapper;
        //    _unitofWork = unitOfWork;
        //}

        //[HttpPost("AddBoardingLodging")]
        //public void AddBoardingLodging([FromBody] BoardingLodgingViewModel boardingLodgingViewModel)
        //{
        //    List<BoardingLodgingInfo> _boardingLodgingItems = _mapper.Map<List<BoardingLodgingItem>, List<BoardingLodgingInfo>>(boardingLodgingViewModel.boardingLodgingItems);
        //    _unitofWork.BoardingLodgingRepository.AddBoardingLodging(_boardingLodgingItems);
        //    _unitofWork.Complete();

        //}

        //[HttpGet("GetBoardingLodgingForRequest")]
        //public BoardingLodgingViewModel GetBoardingLodgingForRequest(int id)
        //{
        //    BoardingLodgingViewModel boardingLodgingOptions = new BoardingLodgingViewModel();
        //    boardingLodgingOptions.boardingLodgingItems = _mapper.Map<List<BoardingLodgingInfo>, List<BoardingLodgingItem>>(_unitofWork.BoardingLodgingRepository.GetBoardingLodgingForRequest(id));

        //    return boardingLodgingOptions;

        //}

        //[HttpPost("DeleteBoardingLodging")]
        //public void DeleteBoardingLodging([FromBody]List<int> deletedIDs)
        //{
        //   foreach(var id in deletedIDs)
        //    {
        //        _unitofWork.BoardingLodgingRepository.Remove(_unitofWork.BoardingLodgingRepository.Get(id));
                

        //    }
        //    _unitofWork.Complete();
        //}

        //[HttpPost("UpdateBoardingLodging")]
        //public void UpdateBoardingLodging([FromBody]BoardingLodgingViewModel boardingLodgingData)
        //{
        //    List<BoardingLodgingItem> boardingLodgingItems = new List<BoardingLodgingItem>();
        //    boardingLodgingItems.AddRange(boardingLodgingData.boardingLodgingItems);
            
            
        //    List<BoardingLodgingInfo> boardingLodgingDataList = (_unitofWork.BoardingLodgingRepository.GetBoardingLodgingForRequest(boardingLodgingItems.First().ReimbursementInfoId));
            
        //    foreach(var item in boardingLodgingItems)
        //    {
        //        var refItem = boardingLodgingDataList.FirstOrDefault(i => i.BoardingInfoId == item.Id);
        //        if(refItem!=null)
        //        {
        //            refItem.PlaceofStay = item.PlaceofStay;
        //            refItem.FromDate = item.FromDate;
        //            refItem.ToDate = item.ToDate;
        //            refItem.Currency = item.Currency;
        //            refItem.AmountSpent = item.AmountSpent;
        //            refItem.Eligibility = item.Eligibility;
        //            refItem.Remarks = item.Remarks;

        //        }
        //    }

        //    _unitofWork.Complete();

        //}

    }
}
