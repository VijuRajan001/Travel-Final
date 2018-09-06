using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class HotelItem
    {
        public int Id { get; set; }
        public string HotelName { get; set; }
        public string Location { get; set; }
        public string Website { get; set; }
        public double HotelCost { get; set; }
        public string Mobileno { get; set; }
        public int RequestInfoId { get; set; }
        
    }
}
