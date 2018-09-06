using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class ForexItem
    {
        public int Id { get; set; }
        public string CardNumber { get; set; }
        public string CardType { get; set; }
        public DateTime? CardExpiryDate { get; set; }
        public int RequestInfoId { get; set; }
    }
}
