using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class TravelExpensesWithoutVoucherItem
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string ModeofConveyance { get; set; }
        public string Currency { get; set; }
        public double AmountSpent { get; set; }
        public string Remarks { get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }

    }
}
