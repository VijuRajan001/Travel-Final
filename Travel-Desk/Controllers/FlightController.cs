

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

using DataAccessRepository.Entities;
using DataAccessRepository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using TravelDesk.Models;
using TravelDesk.ViewModels;

namespace TravelDesk.Controllers
{
    [Route("api/[controller]")]
    public class FlightController : Controller
    {
        private IFlightRepository _flightRepository;
        private readonly IMapper _mapper;
        public FlightController(IFlightRepository flightRepository, IMapper mapper)
        {
            _mapper = mapper;
            _flightRepository = flightRepository;
        }

        [HttpPost("AddFlights")]
        public void AddFlights([FromBody]FlightOptionsViewModel flightData)
        {

            List<FlightInfo> _onwardflightItems = _mapper.Map<List<FlightItem>, List<FlightInfo>>(flightData.OnwardFlightItems);
            List<FlightInfo> _returnflightItems = _mapper.Map<List<FlightItem>, List<FlightInfo>>(flightData.ReturnFlightItems);
            if (_onwardflightItems.Count > 0 && _returnflightItems.Count > 0)
            {
                _flightRepository.AddOnwardFlightOptions(_onwardflightItems);
                _flightRepository.AddReturnFlightOptions(_returnflightItems);


          
            }

        }

        //[HttpGet("GetFlightsForRequest")]
        //public FlightOptionsViewModel GetFlightsForRequest(int id)
        //{
        //    FlightOptionsViewModel vm = new FlightOptionsViewModel();
        //    List<FlightItem> flightDataList = _mapper.Map<List<FlightInfo>, List<FlightItem>>(_unitofWork.FlightRepository.GetFlightsForRequest(id));
        //    vm.OnwardFlightItems = flightDataList.FindAll(item => item.FlightDirection == "Onward");
        //    vm.ReturnFlightItems = flightDataList.FindAll(item => item.FlightDirection == "Return");
        //    return vm;



        //}

        //[HttpPost("DeleteFlights")]
        //public void DeleteFlights([FromBody]List<int> deletedIDs)
        //{
        //    foreach (var id in deletedIDs)
        //    {
        //        _unitofWork.FlightRepository.Remove(_unitofWork.FlightRepository.Get(id));
        //        _unitofWork.Complete();

        //    }
        //}

        //[HttpPost("UpdateFlights")]
        //public void UpdateFlights([FromBody]FlightOptionsViewModel flightData)
        //{
        //    List<FlightItem> flightItems = new List<FlightItem>();
        //    flightItems.AddRange(flightData.OnwardFlightItems);
        //    flightItems.AddRange(flightData.ReturnFlightItems);

        //    if (flightItems.Count > 0)
        //    {
        //        List<FlightInfo> flightDataList = (_unitofWork.FlightRepository.GetFlightsForRequest(flightItems.First().RequestInfoId));

        //        foreach (var item in flightItems)
        //        {
        //            var refItem = flightDataList.FirstOrDefault(i => i.Id == item.Id);
        //            if (refItem != null)
        //            {
        //                refItem.FlightFrom = item.FlightFrom;
        //                refItem.FlightTo = item.FlightTo;
        //                refItem.FlightName = item.FlightName;
        //                refItem.FlightItemId = item.FlightItemId;

        //            }
        //        }

        //        _unitofWork.Complete();
        //    }

        //}

    }
}
