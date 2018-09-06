using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class PerDiemItem
    {
        public int Id { get; set; }
        public DateTime ArrivalDate { get; set; }
        public DateTime DepartureDate { get; set; }
        public string Currency { get; set; }
        public int Eligibility { get; set; }
        public int TotalDays { get; set; }
        public double TotalAmount { get; set; }
        public string Remarks { get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        
    }
}
