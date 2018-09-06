using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class PerDiemInfo
    {   public int PerDiemInfoId { get; set; }
        public DateTime ArrivalDate { get; set;}
        public DateTime DepartureDate { get; set; }
        public string Currency { get; set; }
        public int Eligibility { get; set; }
        public int TotalDays { get; set; }
        public double TotalAmount { get; set; }
        public string Remarks { get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
}
