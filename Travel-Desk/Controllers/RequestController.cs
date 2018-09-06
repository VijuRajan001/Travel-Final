using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

using DataAccessRepository.Entities;
using DataAccessRepository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using TravelDesk.Helpers;
using TravelDesk.Models;
using TravelDesk.ViewModels;

namespace TravelDesk.Controllers
{
    [Route("api/[controller]")]
    public class RequestController : Controller
    {

        private readonly IMapper _mapper;
        private IRequestRepository _repository;
        public RequestController(IRequestRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;

        }

        [HttpPost("AddRequest")]
        public void AddRequest([FromBody]RequestItem requestData)
        {

            RequestInfo newRequest = new RequestInfo();
            newRequest = _mapper.Map<RequestItem, RequestInfo>(requestData);
            _repository.AddRequest(newRequest);
            

        }

        [HttpGet("GetRequestList")]
        public List<RequestItem> GetRequestList(string login)
        {

            List<RequestItem> requestDataList = _mapper.Map<List<RequestInfo>, List<RequestItem>>(_repository.GetAllRequestsWithStatus(login).ToList());
            return requestDataList.OrderByDescending(x => x.RequestId).ToList();



        }




        [HttpGet("GetRequestById")]
        public RequestItem GetRequestById(int id)
        {
            RequestItem requestdata = _mapper.Map<RequestInfo, RequestItem>(_repository.GetRequestDetails(id));
            return requestdata;
        }

        //[HttpPost("UpdateRequest")]
        //public void UpdateRequest([FromBody]RequestItem requestData)
        //{
        //    RequestInfo newRequest = _unitofWork.RequestRepository.Get(requestData.RequestId);
        //    newRequest.ProjectId = requestData.Project_Code;
        //    newRequest.TravelCountry = requestData.Country;
        //    newRequest.TravelStart = requestData.TravelDate;
        //    newRequest.TravelReturn = requestData.ReturnDate;
        //    newRequest.RequestStatus = requestData.RequestStatus;
        //    int i = _unitofWork.Complete();


        //}


        //[HttpGet("ApproveRequest")]
        //public void ApproveRequest(int id)
        //{
        //    RequestInfo newRequest = _unitofWork.RequestRepository.Get(id);
        //    newRequest.RequestStatus = "Approved";
        //    int i = _unitofWork.Complete();
        //    EmailModel email = new EmailModel();
        //    email.To = "vijurajana@nousinfo.com";
        //    email.Subject = "travel Request Status for Request Id " + id;
        //    email.Body= "Request Status for Request Id " + id + " has been Approved";
        //    email.Email = "vijurajana@nousinfo.com";
        //    Email.SendMail(email);
        //}

        //[HttpGet("DeclineRequest")]
        //public void DeclineRequest(int id)
        //{
        //    RequestInfo newRequest = _unitofWork.RequestRepository.Get(id);
        //    newRequest.RequestStatus = "Declined";
        //    int i = _unitofWork.Complete();
        //    EmailModel email = new EmailModel();
        //    email.To = "vijurajana@nousinfo.com";
        //    email.Subject = "travel Request Status for Request Id " + id;
        //    email.Body = "Request Status for Request Id " + id + " has been Declined";
        //    email.Email = "vijurajana@nousinfo.com";
        //    Email.SendMail(email);
        //}
    }
}
