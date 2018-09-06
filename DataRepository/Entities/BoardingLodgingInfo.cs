using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class BoardingLodgingInfo
    {   [Key]
        public int BoardingInfoId { get; set; }
        public string PlaceofStay { get; set; }
        public DateTime FromDate { get; set;}
        public DateTime ToDate { get; set; }
        public string Currency { get; set; }
        public double AmountSpent { get; set; }
        public int Eligibility { get; set; }
        public string Remarks { get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
}
