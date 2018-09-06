using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class OtherExpensesInfo
    {   [Key]
        public int OtherExpensesInfoId { get; set; }
        public DateTime ExpenseDate { get; set;}
        public string NatureofExpense { get; set; }
        public string Currency { get; set; }
        public double AmountSpent { get; set; }
        public int Eligibility { get; set; }
        public Boolean  SupportbyVoucher{ get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
}
