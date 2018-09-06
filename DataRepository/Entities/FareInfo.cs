using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class FareInfo
    {   [Key]
        public int FareInfoId { get; set; }
        public string TravelMode { get; set; }
        public DateTime Date { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string Currency { get; set; }
        public double AmountSpent { get; set; }
        public bool Eligibility { get; set; }
        public string Remark { get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
}
