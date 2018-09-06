

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

using DataAccessRepository.Entities;
using Microsoft.AspNetCore.Mvc;
using TravelDesk.Helpers;
using TravelDesk.Models;
using TravelDesk.ViewModels;

namespace TravelDesk.Controllers
{
    [Route("api/[controller]")]
    public class ReimbursementController : Controller
    {
    //    private IUnitOfWork _unitofWork;
    //    private readonly IMapper _mapper;
    //    public ReimbursementController(IUnitOfWork unitOfWork, IMapper mapper)
    //    {
    //        _mapper = mapper;
    //        _unitofWork = unitOfWork;
    //    }

    //    [HttpPost("AddReimbursement")]
    //    public void AddReimbursement([FromBody]ReimbursementItem reimbursementData)
    //    {

    //        ReimbursementInfo newReimbursement = new ReimbursementInfo();
    //        newReimbursement=_mapper.Map<ReimbursementItem, ReimbursementInfo>(reimbursementData);
            
    //        _unitofWork.ReimbursementRepository.Add(newReimbursement);
    //        int i = _unitofWork.Complete();

    //    }

    //    [HttpGet("GetReimbursementList")]
    //    public List<ReimbursementItem> GetReimbursementList()
    //    {

    //        List<ReimbursementItem> reimbursementDataList = _mapper.Map<List<ReimbursementInfo>, List<ReimbursementItem>>(_unitofWork.ReimbursementRepository.GetAll().ToList());
    //        return reimbursementDataList;



    //    }

    //    [HttpGet("GetReimbursementById")]
    //    public ReimbursementItem GetReimbursementById(int Id)
    //    {
    //        ReimbursementItem reimbursementData = _mapper.Map<ReimbursementInfo, ReimbursementItem>(_unitofWork.ReimbursementRepository.Get(Id));
    //        return reimbursementData;
    //    }

    //    [HttpPost("UpdateReimbursement")]
    //    public void UpdateReimbursement([FromBody]ReimbursementItem reimbursementData)
    //    {
    //        ReimbursementInfo newReimbursement = _unitofWork.ReimbursementRepository.Get(reimbursementData.ReimbursementInfoId);
    //        newReimbursement.ReimbursementInfoId = reimbursementData.ReimbursementInfoId;
    //        newReimbursement.ProjectCode = reimbursementData.ProjectCode;
    //        newReimbursement.PurposeofTravel = reimbursementData.PurposeofTravel;
    //        newReimbursement.EmployeeId = reimbursementData.EmployeeId;
    //        newReimbursement.EmployeeName = reimbursementData.EmployeeName;
    //        newReimbursement.BandWorkLevel = reimbursementData.BandWorkLevel;
    //        newReimbursement.ClientName = reimbursementData.ClientName;
    //        newReimbursement.CostCenter = reimbursementData.CostCenter;
    //        newReimbursement.DateofArrival = reimbursementData.DateofArrival;
    //        newReimbursement.DateofDeparture = reimbursementData.DateofDeparture;
    //        newReimbursement.Designation = reimbursementData.Designation;
    //        newReimbursement.FlightChargesReimbursed = reimbursementData.FlightChargesReimbursed;
    //        newReimbursement.LocationofTravel = reimbursementData.LocationofTravel;
    //        newReimbursement.TravelBillabletoCustomer = reimbursementData.TravelBillabletoCustomer;
    //        newReimbursement.TravelExpenseReimbursed = reimbursementData.TravelExpenseReimbursed;
    //        newReimbursement.AnyOtherExpenseReimbursed = reimbursementData.AnyOtherExpenseReimbursed;
            
    //        int i = _unitofWork.Complete();
            
            
    //    }


    //    [HttpGet("ApproveRequest")]
    //    public void ApproveRequest(int id)
    //    {
    //        ReimbursementInfo newRequest = _unitofWork.ReimbursementRepository.Get(id);
    //        newRequest.ReimbursementStatus = "Approved";
    //        int i = _unitofWork.Complete();
    //        EmailModel email = new EmailModel();
    //        email.To = "vijurajana@nousinfo.com";
    //        email.Subject = "Travel reimbursement Status for reimbursement Id " + id;
    //        email.Body = "Reimbursement Status for reimbursement Id " + id + " has been Approved";
    //        email.Email = "vijurajana@nousinfo.com";
    //        Email.SendMail(email);
    //    }

    //    [HttpGet("DeclineRequest")]
    //    public void DeclineRequest(int id)
    //    {
    //        ReimbursementInfo newRequest = _unitofWork.ReimbursementRepository.Get(id);
    //        newRequest.ReimbursementStatus = "Declined";
    //        int i = _unitofWork.Complete();
    //        EmailModel email = new EmailModel();
    //        email.To = "vijurajana@nousinfo.com";
    //        email.Subject = "Travel reimbursement Status for Request Id " + id;
    //        email.Body = "Reimbursement Status for reimbursement Id " + id + " has been Declined";
    //        email.Email = "vijurajana@nousinfo.com";
    //        Email.SendMail(email);
    //    }
    }
}
