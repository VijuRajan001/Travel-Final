using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class TravelExpensesWithoutVoucherInfo
    {   [Key]
        public int TravelExpensesWithoutVoucherInfoId { get; set; }
        public DateTime Date { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string ModeofConveyance { get; set; }
        public string Currency { get; set; }
        public double AmountSpent { get; set; }
        public string Remarks { get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
}
