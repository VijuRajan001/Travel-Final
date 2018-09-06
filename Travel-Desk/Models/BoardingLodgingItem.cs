using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class BoardingLodgingItem
    {
        public int Id { get; set; }
        public string PlaceofStay { get;
            set; }
        public DateTime FromDate { get;
            set; }
        public DateTime ToDate { get;
            set; }
        public string Currency { get;
            set; }
        public double AmountSpent { get;
            set; }
        public int Eligibility { get;
            set; }
        public string Remarks { get;
            set; }
        public double Total { get;
            set; }
        public int ReimbursementInfoId { get;
            set; }

    }
}
