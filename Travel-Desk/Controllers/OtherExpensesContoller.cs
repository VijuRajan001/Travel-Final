

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
    public class OtherExpensesController : Controller
    {
    //    private IUnitOfWork _unitofWork;
    //    private readonly IMapper _mapper;
    //    public OtherExpensesController(IUnitOfWork unitOfWork, IMapper mapper)
    //    {
    //        _mapper = mapper;
    //        _unitofWork = unitOfWork;
    //    }

    //    [HttpPost("AddOtherExpenses")]
    //    public void AddOtherExpenses([FromBody] OtherExpensesViewModel otherExpensesViewModel)
    //    {
    //        List<OtherExpensesInfo> _otherExpensesItems = _mapper.Map<List<OtherExpensesItem>, List<OtherExpensesInfo>>(otherExpensesViewModel.otherExpenseItems);
    //        _unitofWork.OtherExpensesRepository.AddOtherExpensesOptions(_otherExpensesItems);
    //        _unitofWork.Complete();

    //    }

    //    [HttpGet("GetOtherExpensesForRequest")]
    //    public OtherExpensesViewModel GetOtherExpensesForRequest(int id)
    //    {
    //        OtherExpensesViewModel otherExpensesOptions = new OtherExpensesViewModel();
    //        otherExpensesOptions.otherExpenseItems = _mapper.Map<List<OtherExpensesInfo>, List<OtherExpensesItem>>(_unitofWork.OtherExpensesRepository.GetOtherExpensesForRequest(id));

    //        return otherExpensesOptions;

    //    }

    //    [HttpPost("DeleteOtherExpenses")]
    //    public void DeleteOtherExpenses([FromBody]List<int> deletedIDs)
    //    {
    //       foreach(var id in deletedIDs)
    //        {
    //            _unitofWork.OtherExpensesRepository.Remove(_unitofWork.OtherExpensesRepository.Get(id));
                

    //        }
    //        _unitofWork.Complete();
    //    }

    //    [HttpPost("UpdateOtherExpenses")]
    //    public void UpdateOtherExpenses([FromBody]OtherExpensesViewModel otherExpensesData)
    //    {
    //        List<OtherExpensesItem> otherExpensesItems = new List<OtherExpensesItem>();
    //        otherExpensesItems.AddRange(otherExpensesData.otherExpenseItems);
            
            
    //        List<OtherExpensesInfo> otherExpensesList = (_unitofWork.OtherExpensesRepository.GetOtherExpensesForRequest(otherExpensesItems.First().ReimbursementInfoId));
            
    //        foreach(var item in otherExpensesItems)
    //        {
    //            var refItem = otherExpensesList.FirstOrDefault(i => i.OtherExpensesInfoId == item.Id);
    //            if(refItem!=null)
    //            {
    //                refItem.Date = item.Date;
    //                refItem.Currency = item.Currency;
    //                refItem.AmountSpent = item.AmountSpent;
                    
    //                refItem.NatureofExpense = item.NatureOfExpenses;
    //                refItem.SupportbyVoucher = item.SupportByVoucher;
    
    //            }
    //        }

    //        _unitofWork.Complete();

    //    }

    }
}
