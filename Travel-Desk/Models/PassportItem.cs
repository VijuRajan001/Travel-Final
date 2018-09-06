using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class PassportItem
    {
        public int Id { get; set; }
        public string PassportNum { get; set; }
        public DateTime? PassportExpiryDate { get; set; }
        public string VisaNum { get; set; }
        public DateTime? VisaExpiryDate { get; set; }
        public int RequestInfoId { get; set; }

    }
}
