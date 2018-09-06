

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
    public class TravelExpensesWithoutVoucherController : Controller
    {
        
        private readonly IMapper _mapper;
        public TravelExpensesWithoutVoucherController(IMapper mapper)
        {
            _mapper = mapper;
            
        }

        [HttpPost("AddTravelExpensesWithoutVoucher")]
        public void AddTravelExpensesWithoutVoucher([FromBody] TravelExpensesWithoutVoucherViewModel travelExpensesWithoutVoucherViewModel)
        {
            List<TravelExpensesWithoutVoucherInfo> _travelExpensesWithoutVoucherItems = _mapper.Map<List<TravelExpensesWithoutVoucherItem>, List<TravelExpensesWithoutVoucherInfo>>(travelExpensesWithoutVoucherViewModel.travelExpensesWithoutVoucherItems);
            //_unitofWork.TravelExpensesWithoutVoucherRepository.AddTravelExpensesWithoutVoucherOptions(_travelExpensesWithoutVoucherItems);
            //_unitofWork.Complete();

        }

        [HttpGet("GetTravelExpensesWithoutVoucherForRequest")]
        public TravelExpensesWithoutVoucherViewModel GetTravelExpensesWithoutVoucherForRequest(int id)
        {
            TravelExpensesWithoutVoucherViewModel travelExpensesWithoutVoucherOptions = new TravelExpensesWithoutVoucherViewModel();
            //travelExpensesWithoutVoucherOptions.travelExpensesWithoutVoucherItems = _mapper.Map<List<TravelExpensesWithoutVoucherInfo>, List<TravelExpensesWithoutVoucherItem>>(_unitofWork.TravelExpensesWithoutVoucherRepository.GetTravelExpensesWithoutVoucherForRequest(id));

            return travelExpensesWithoutVoucherOptions;

        }

        [HttpPost("DeleteTravelExpensesWithoutVoucher")]
        public void DeleteTravelExpensesWithoutVoucher([FromBody]List<int> deletedIDs)
        {
            //foreach (var id in deletedIDs)
            //{
            //    _unitofWork.TravelExpensesWithoutVoucherRepository.Remove(_unitofWork.TravelExpensesWithoutVoucherRepository.Get(id));


            //}
            //_unitofWork.Complete();
        }

        [HttpPost("UpdateTravelExpensesWithoutVoucher")]
        public void UpdateTravelExpensesWithoutVoucher([FromBody]TravelExpensesWithoutVoucherViewModel travelExpensesWithoutVoucherData)
        {
            //List<TravelExpensesWithoutVoucherItem> travelExpensesWithoutVoucherItems = new List<TravelExpensesWithoutVoucherItem>();
            //travelExpensesWithoutVoucherItems.AddRange(travelExpensesWithoutVoucherData.travelExpensesWithoutVoucherItems);


            //List<TravelExpensesWithoutVoucherInfo> travelExpensesWithoutVoucherDataList = (_unitofWork.TravelExpensesWithoutVoucherRepository.GetTravelExpensesWithoutVoucherForRequest(travelExpensesWithoutVoucherItems.First().ReimbursementInfoId));

            //foreach (var item in travelExpensesWithoutVoucherItems)
            //{
            //    var refItem = travelExpensesWithoutVoucherDataList.FirstOrDefault(i => i.TravelExpensesWithoutVoucherInfoId == item.Id);
            //    if (refItem != null)
            //    {
            //        refItem.Date = item.Date;
            //        refItem.From = item.From;
            //        refItem.To = item.To;
            //        refItem.ModeofConveyance = item.ModeofConveyance;
            //        refItem.Currency = item.Currency;
            //        refItem.AmountSpent = item.AmountSpent;
            //        refItem.Remarks = item.Remarks;

            //    }
            //}

            //_unitofWork.Complete();

        }

    }
}
