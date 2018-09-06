using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class ReimbursementInfo
    {

        public ReimbursementInfo()
        {

            FareInfo = new List<FareInfo>();
            PerdiemInfo = new List<PerDiemInfo>();
            BoardingLodgingExpenseInfo = new List<BoardingLodgingInfo>();
            LocalTravelExpenseInfo = new List<LocalTravelExpenseInfo>();
            OtherExpenseInfo = new List<OtherExpensesInfo>();
            TravelExpenseUnsupportedbyVoucherInfo = new List<TravelExpensesWithoutVoucherInfo>();
            TravelExpensebyVoucherInfo = new List<TravelExpensesWithVoucherInfo>();
        }
        [Key]
        public int ReimbursementInfoId { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeId { get; set; }
        public string Designation { get; set; }
        public string BandWorkLevel { get; set; }
        public string ClientName { get; set; }
        public string ProjectCode { get; set; }
        public string CostCenter { get; set; }
        public string PurposeofTravel { get; set; }
        public string LocationofTravel { get; set; }
        public string ReimbursementStatus { get; set; }
        public DateTime DateofArrival { get; set; }
        public DateTime DateofDeparture { get; set; }
        public Boolean TravelBillabletoCustomer { get; set; }
        public Boolean FlightChargesReimbursed { get; set; }
        public Boolean TravelExpenseReimbursed { get; set; }
        public Boolean AnyOtherExpenseReimbursed { get; set; }

        public ICollection<FareInfo> FareInfo { get; set; }
        public ICollection<PerDiemInfo> PerdiemInfo { get; set; }
        public ICollection<BoardingLodgingInfo> BoardingLodgingExpenseInfo{ get; set; }
        public ICollection<LocalTravelExpenseInfo> LocalTravelExpenseInfo { get; set; }
        public ICollection<OtherExpensesInfo> OtherExpenseInfo { get; set; }
        public ICollection<TravelExpensesWithoutVoucherInfo> TravelExpenseUnsupportedbyVoucherInfo { get; set; }
        public ICollection<TravelExpensesWithVoucherInfo> TravelExpensebyVoucherInfo { get; set; }
    }
}
