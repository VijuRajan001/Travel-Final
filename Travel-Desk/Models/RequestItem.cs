using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class RequestItem
    {
        public int RequestId { get; set; }
        public string Project_Code { get; set; }
        public string Country { get; set; }
        public DateTime TravelDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public DateTime Dob { get; set; }
        public string EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string RequestStatus { get; set; }
        public string Approver { get; set; }
        public string CreatedBy { get; set; }

        public ICollection<FlightItem> FlightItem { get; set; }
        public ICollection<HotelItem> HotelItem { get; set; }
        public ForexItem ForexItem { get; set; }
        public PassportItem PassportItem { get; set; }


    }
}
