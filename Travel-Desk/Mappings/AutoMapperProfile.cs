using AutoMapper;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelDesk.Models;
using TravelDesk.ViewModels;

namespace TravelDesk.Mappings
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<RequestInfo, RequestItem>()
                .ForMember(dest => dest.RequestId,
                            opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Project_Code,
                            opt => opt.MapFrom(src=> src.ProjectId))
                .ForMember(dest => dest.Country,
                            opt => opt.MapFrom(src => src.TravelCountry))       
                .ForMember(dest => dest.TravelDate,
                            opt => opt.MapFrom(src => src.TravelStart))
                .ForMember(dest => dest.ReturnDate,
                            opt => opt.MapFrom(src => src.TravelReturn))
                .ForMember(dest => dest.EmployeeId,
                            opt => opt.MapFrom(src => src.EmployeeId))
                .ForMember(dest => dest.EmployeeName,
                            opt => opt.MapFrom(src => src.EmployeeName))
                .ForMember(dest => dest.RequestStatus,
                            opt => opt.MapFrom(src => src.RequestStatus))
                .ForMember(dest => dest.CreatedBy,
                            opt => opt.MapFrom(src => src.CreatedBy))
                .ForMember(dest => dest.Approver,
                            opt => opt.MapFrom(src => src.Approver))
                .ForMember(dest => dest.FlightItem,
                            opt => opt.MapFrom(src => src.FlightInfo))
                .ForMember(dest => dest.HotelItem,
                            opt => opt.MapFrom(src => src.HotelInfo))
                 .ForMember(dest => dest.ForexItem,
                            opt => opt.MapFrom(src => src.ForexInfo))
                 .ForMember(dest => dest.PassportItem,
                            opt => opt.MapFrom(src => src.PassportInfo))
                .ReverseMap();

            CreateMap<FlightInfo, FlightItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.FlightItemId,
                            opt => opt.MapFrom(src => src.FlightItemId))
                .ForMember(dest => dest.FlightFrom,
                            opt => opt.MapFrom(src => src.FlightFrom))
                .ForMember(dest => dest.FlightName,
                            opt => opt.MapFrom(src => src.FlightName))
                .ForMember(dest => dest.FlightTo,
                            opt => opt.MapFrom(src => src.FlightTo))
                .ForMember(dest => dest.FlightCost,
                            opt => opt.MapFrom(src => src.FlightCost))
                .ForMember(dest => dest.RequestInfoId,
                            opt => opt.MapFrom(src => src.RequestInfoId))
                .ForMember(dest => dest.FlightDirection,
                            opt => opt.MapFrom(src => src.FlightDirection))
                 .ForMember(dest => dest.flightLayover,
                            opt => opt.MapFrom(src => src.flightLayover))
                  .ForMember(dest => dest.flightLayoverHours,
                            opt => opt.MapFrom(src => src.flightLayoverHours))
                  .ForMember(dest => dest.flightStartDate,
                            opt => opt.MapFrom(src => src.flightStartDate))
                   .ForMember(dest => dest.flightStartTime,
                            opt => opt.MapFrom(src => src.flightStartTime))
                   .ForMember(dest => dest.flightEndDate,
                            opt => opt.MapFrom(src => src.flightEndDate))
                    .ForMember(dest => dest.flightEndTime,
                            opt => opt.MapFrom(src => src.flightEndTime))

                .ReverseMap();


            CreateMap<HotelInfo, HotelItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.HotelName,
                            opt => opt.MapFrom(src => src.HotelName))
                .ForMember(dest => dest.Location,
                            opt => opt.MapFrom(src => src.Location))
                .ForMember(dest => dest.Website,
                            opt => opt.MapFrom(src => src.Website))
                .ForMember(dest => dest.Mobileno,
                            opt => opt.MapFrom(src => src.MobileNo))
                .ForMember(dest => dest.HotelCost,
                            opt => opt.MapFrom(src => src.Charges))
                .ForMember(dest => dest.RequestInfoId,
                            opt => opt.MapFrom(src => src.RequestInfoId))
                .ReverseMap();

            CreateMap<PassportInfo, PassportItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.PassportNum,
                            opt => opt.MapFrom(src => src.PassportNumber))
                .ForMember(dest => dest.PassportExpiryDate,
                            opt => opt.MapFrom(src => src.PassportExpiryDate))
                .ForMember(dest => dest.VisaNum,
                            opt => opt.MapFrom(src => src.VisaNumber))
                .ForMember(dest => dest.PassportExpiryDate,
                            opt => opt.MapFrom(src => src.VisaExpiryDate))
                .ForMember(dest => dest.RequestInfoId,
                            opt => opt.MapFrom(src => src.RequestInfoId))
                .ReverseMap();

            CreateMap<ForexInfo, ForexItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.CardNumber,
                            opt => opt.MapFrom(src => src.CardNumber))
                .ForMember(dest => dest.CardType,
                            opt => opt.MapFrom(src => src.CardType))
                .ForMember(dest => dest.CardExpiryDate,
                            opt => opt.MapFrom(src => src.CardExpiryDate))
                .ForMember(dest => dest.RequestInfoId,
                            opt => opt.MapFrom(src => src.RequestInfoId))
                .ReverseMap();

            CreateMap<ReimbursementInfo, ReimbursementItem>()
                .ForMember(dest => dest.ReimbursementInfoId,
                            opt => opt.MapFrom(src => src.ReimbursementInfoId))
                .ForMember(dest => dest.EmployeeId,
                            opt => opt.MapFrom(src => src.EmployeeId))
                .ForMember(dest => dest.EmployeeName,
                            opt => opt.MapFrom(src => src.EmployeeName))
                .ForMember(dest => dest.Designation,
                            opt => opt.MapFrom(src => src.Designation))
                .ForMember(dest => dest.BandWorkLevel,
                            opt => opt.MapFrom(src => src.BandWorkLevel))
                .ForMember(dest => dest.ClientName,
                            opt => opt.MapFrom(src => src.ClientName))
                .ForMember(dest => dest.ProjectCode,
                            opt => opt.MapFrom(src => src.ProjectCode))
                .ForMember(dest => dest.CostCenter,
                            opt => opt.MapFrom(src => src.CostCenter))
                .ForMember(dest => dest.PurposeofTravel,
                            opt => opt.MapFrom(src => src.PurposeofTravel))
                .ForMember(dest => dest.LocationofTravel,
                            opt => opt.MapFrom(src => src.LocationofTravel))
                .ForMember(dest => dest.DateofArrival,
                            opt => opt.MapFrom(src => src.DateofArrival))
                .ForMember(dest => dest.DateofDeparture,
                            opt => opt.MapFrom(src => src.DateofDeparture))
                .ForMember(dest => dest.TravelBillabletoCustomer,
                            opt => opt.MapFrom(src => src.TravelBillabletoCustomer))
                .ForMember(dest => dest.FlightChargesReimbursed,
                            opt => opt.MapFrom(src => src.FlightChargesReimbursed))
                .ForMember(dest => dest.TravelExpenseReimbursed,
                            opt => opt.MapFrom(src => src.TravelExpenseReimbursed))
                .ForMember(dest => dest.AnyOtherExpenseReimbursed,
                            opt => opt.MapFrom(src => src.AnyOtherExpenseReimbursed))
                            .ForMember(dest => dest.ReimbursementStatus,
                            opt => opt.MapFrom(src => src.ReimbursementStatus))
                .ReverseMap();

            CreateMap<FareInfo, FareItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.FareInfoId))
                .ForMember(dest => dest.TravelMode,
                            opt => opt.MapFrom(src => src.TravelMode))
                .ForMember(dest => dest.Date,
                            opt => opt.MapFrom(src => src.Date))
                .ForMember(dest => dest.From,
                            opt => opt.MapFrom(src => src.From))
                .ForMember(dest => dest.To,
                            opt => opt.MapFrom(src => src.To))
                .ForMember(dest => dest.Currency,
                            opt => opt.MapFrom(src => src.Currency))
                .ForMember(dest => dest.AmountSpent,
                            opt => opt.MapFrom(src => src.AmountSpent))
                
                .ForMember(dest => dest.Remarks,
                            opt => opt.MapFrom(src => src.Remark))
                
                .ForMember(dest => dest.ReimbursementInfoId,
                            opt => opt.MapFrom(src => src.ReimbursementInfoId))
                .ReverseMap();


            CreateMap<PerDiemInfo, PerDiemItem>()

                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.PerDiemInfoId))

                .ForMember(dest => dest.ArrivalDate,
                            opt => opt.MapFrom(src => src.ArrivalDate))
                .ForMember(dest => dest.DepartureDate,
                            opt => opt.MapFrom(src => src.DepartureDate))
                .ForMember(dest => dest.Currency,
                            opt => opt.MapFrom(src => src.Currency))
                .ForMember(dest => dest.Eligibility,
                            opt => opt.MapFrom(src => src.Eligibility))
                .ForMember(dest => dest.TotalDays,
                            opt => opt.MapFrom(src => src.TotalDays))
                .ForMember(dest => dest.TotalAmount,
                            opt => opt.MapFrom(src => src.TotalAmount))
                .ForMember(dest => dest.Remarks,
                            opt => opt.MapFrom(src => src.Remarks))
                .ForMember(dest => dest.Total,
                            opt => opt.MapFrom(src => src.Total))
                .ForMember(dest => dest.ReimbursementInfoId,
                            opt => opt.MapFrom(src => src.ReimbursementInfoId))
                .ReverseMap();


            CreateMap<BoardingLodgingInfo, BoardingLodgingItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.BoardingInfoId))
                .ForMember(dest => dest.PlaceofStay,
                            opt => opt.MapFrom(src => src.PlaceofStay))
                .ForMember(dest => dest.FromDate,
                            opt => opt.MapFrom(src => src.FromDate))
                .ForMember(dest => dest.ToDate,
                            opt => opt.MapFrom(src => src.ToDate))
                .ForMember(dest => dest.Currency,
                            opt => opt.MapFrom(src => src.Currency))
                .ForMember(dest => dest.AmountSpent,
                            opt => opt.MapFrom(src => src.AmountSpent))
                .ForMember(dest => dest.Eligibility,
                            opt => opt.MapFrom(src => src.Eligibility))
                .ForMember(dest => dest.Remarks,
                            opt => opt.MapFrom(src => src.Remarks))
                .ForMember(dest => dest.Total,
                            opt => opt.MapFrom(src => src.Total))
                .ForMember(dest => dest.ReimbursementInfoId,
                            opt => opt.MapFrom(src => src.ReimbursementInfoId))
                .ReverseMap();


            CreateMap<TravelExpensesWithoutVoucherInfo, TravelExpensesWithoutVoucherItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.TravelExpensesWithoutVoucherInfoId))
                .ForMember(dest => dest.Date,
                            opt => opt.MapFrom(src => src.Date))
                .ForMember(dest => dest.From,
                            opt => opt.MapFrom(src => src.From))
                .ForMember(dest => dest.To,
                            opt => opt.MapFrom(src => src.To))
                .ForMember(dest => dest.ModeofConveyance,
                            opt => opt.MapFrom(src => src.ModeofConveyance))
                .ForMember(dest => dest.Currency,
                            opt => opt.MapFrom(src => src.Currency))
                .ForMember(dest => dest.AmountSpent,
                            opt => opt.MapFrom(src => src.AmountSpent))
                .ForMember(dest => dest.Remarks,
                            opt => opt.MapFrom(src => src.Remarks))
                .ForMember(dest => dest.ReimbursementInfoId,
                            opt => opt.MapFrom(src => src.ReimbursementInfoId))
                .ReverseMap();


            CreateMap<TravelExpensesWithVoucherInfo, TravelExpensesWithVoucherItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.TravelExpensesWithVoucherInfoId))
                .ForMember(dest => dest.Date,
                            opt => opt.MapFrom(src => src.Date))
                .ForMember(dest => dest.From,
                            opt => opt.MapFrom(src => src.From))
                .ForMember(dest => dest.To,
                            opt => opt.MapFrom(src => src.To))
                .ForMember(dest => dest.ModeOfConveyance,
                            opt => opt.MapFrom(src => src.ModeofConveyance))
                .ForMember(dest => dest.Currency,
                            opt => opt.MapFrom(src => src.Currency))
                .ForMember(dest => dest.AmountSpent,
                            opt => opt.MapFrom(src => src.AmountSpent))
                .ForMember(dest => dest.Remarks,
                            opt => opt.MapFrom(src => src.Remarks))
                .ForMember(dest => dest.Total,
                            opt => opt.MapFrom(src => src.Total))
                .ForMember(dest => dest.ReimbursementInfoId,
                            opt => opt.MapFrom(src => src.ReimbursementInfoId))
                .ReverseMap();


            CreateMap<OtherExpensesInfo, OtherExpensesItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.OtherExpensesInfoId))
                .ForMember(dest => dest.Date,
                            opt => opt.MapFrom(src => src.ExpenseDate))
                .ForMember(dest => dest.NatureOfExpenses,
                            opt => opt.MapFrom(src => src.NatureofExpense))
                .ForMember(dest => dest.Currency,
                            opt => opt.MapFrom(src => src.Currency))
                .ForMember(dest => dest.AmountSpent,
                            opt => opt.MapFrom(src => src.AmountSpent))
                
                .ForMember(dest => dest.SupportByVoucher,
                            opt => opt.MapFrom(src => src.SupportbyVoucher))
               
                .ForMember(dest => dest.ReimbursementInfoId,
                            opt => opt.MapFrom(src => src.ReimbursementInfoId))
                .ReverseMap();


        }
    }
}
