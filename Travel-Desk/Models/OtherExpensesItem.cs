using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class OtherExpensesItem
    {   
        public int Id { get; set; }
        public DateTime Date { get;
            set; }
        public string NatureOfExpenses { get;
            set; }
        public string Currency { get;
            set; }
        public double AmountSpent { get;
            set; }
        public Boolean SupportByVoucher { get;
            set; }
        public int ReimbursementInfoId { get;
            set; }

    }
}
