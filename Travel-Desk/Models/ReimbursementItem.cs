using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class ReimbursementItem
    {
        public int ReimbursementInfoId { get;
            set; }
        public string EmployeeName { get;
            set; }
        public string EmployeeId { get;
            set; }
        public string Designation { get;
            set; }
        public string BandWorkLevel { get;
            set; }
        public string ClientName { get;
            set; }
        public string ProjectCode { get;
            set; }
        public string CostCenter { get;
            set; }
        public string PurposeofTravel { get;
            set; }
        public string LocationofTravel { get;
            set; }
        public DateTime DateofArrival { get;
            set; }
        public DateTime DateofDeparture { get;
            set; }
        public Boolean TravelBillabletoCustomer { get;
            set; }
        public Boolean FlightChargesReimbursed { get;
            set; }
        public Boolean TravelExpenseReimbursed { get;
            set; }
        public Boolean AnyOtherExpenseReimbursed { get;
            set; }
        public string ReimbursementStatus { get; set; }
    }
}
