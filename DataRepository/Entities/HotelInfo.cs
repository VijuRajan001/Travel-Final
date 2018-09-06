using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class HotelInfo
    {
        public int Id { get; set; }
        public string HotelName { get; set; }
        public string Location { get; set; }
        public string Amenities { get; set; }
        public string Website { get; set; }
        public string MobileNo { get; set; }
        public DateTime CheckinTime { get; set; }
        public DateTime CheckoutTime { get; set; }
        public double Charges { get; set; }
        public string Remarks { get; set; }

        public int RequestInfoId { get; set; }
        public RequestInfo RequestInfo { get; set; }
    }
}
