

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
    public class HotelController : Controller
    {
        //private IUnitOfWork _unitofWork;
        //private readonly IMapper _mapper;
        //public HotelController(IUnitOfWork unitOfWork, IMapper mapper)
        //{
        //    _mapper = mapper;
        //    _unitofWork = unitOfWork;
        //}

        //[HttpPost("AddHotels")]
        //public void AddHotels([FromBody] HotelOptionsViewModel hotelOptionsViewModel)
        //{
        //    List<HotelInfo> _hotelItems = _mapper.Map<List<HotelItem>, List<HotelInfo>>(hotelOptionsViewModel.hotelItems);
        //    _unitofWork.HotelRepository.AddHotelOptions(_hotelItems);
        //    _unitofWork.Complete();

        //}

        //[HttpGet("GetHotelsForRequest")]
        //public HotelOptionsViewModel GetHotelsForRequest(int id)
        //{
        //    HotelOptionsViewModel hotelOptions = new HotelOptionsViewModel();
        //    hotelOptions.hotelItems = _mapper.Map<List<HotelInfo>, List<HotelItem>>(_unitofWork.HotelRepository.GetHotelsForRequest(id));

        //    return hotelOptions;

        //}

        //[HttpPost("DeleteHotels")]
        //public void DeleteFlights([FromBody]List<int> deletedIDs)
        //{
        //   foreach(var id in deletedIDs)
        //    {
        //        _unitofWork.HotelRepository.Remove(_unitofWork.HotelRepository.Get(id));
                

        //    }
        //    _unitofWork.Complete();
        //}

        //[HttpPost("UpdateHotel")]
        //public void UpdateFlights([FromBody]HotelOptionsViewModel hotelData)
        //{
        //    List<HotelItem> hotelItems = new List<HotelItem>();
        //    hotelItems.AddRange(hotelData.hotelItems);
            
            
        //    List<HotelInfo> hotelDataList = (_unitofWork.HotelRepository.GetHotelsForRequest(hotelItems.First().RequestInfoId));
            
        //    foreach(var item in hotelItems)
        //    {
        //        var refItem = hotelDataList.FirstOrDefault(i => i.Id == item.Id);
        //        if(refItem!=null)
        //        {
        //            refItem.HotelName = item.HotelName;
        //            refItem.Location = item.Location;
        //            refItem.MobileNo = item.Mobileno;
        //            refItem.Website = item.Website;
    
        //        }
        //    }

        //    _unitofWork.Complete();

        //}

    }
}
