using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class LocalTravelExpenseInfo
    {   [Key]
        public int LocalTravelExpenseInfoId { get; set; }
        public DateTime TravelDate { get; set;}
        public string To { get; set; }
        public string From { get; set; }
        public string ModeofConveyance { get; set; }
        public double Currency { get; set; }
        public double AmountSpent { get; set; }
        public Boolean SupportbyVoucher{ get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
}
