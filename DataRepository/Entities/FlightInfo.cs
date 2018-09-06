using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class FlightInfo
    {
        public int Id { get; set; }
        public string FlightItemId {get;set;}
        public string FlightName { get; set; }
        public string FlightTo { get; set; }
        public string FlightFrom { get; set; }
        public double FlightCost { get; set; }
        public string FlightDirection { get; set; }
       
        public string flightLayover { get; set; }
        public int flightLayoverHours { get; set; }
        public DateTime flightStartDate { get; set; }
        public DateTime flightEndDate { get; set; }
        public string flightStartTime { get; set; }
        public string flightEndTime { get; set; }
        public int RequestInfoId { get; set; }
        public RequestInfo RequestInfo { get; set; }
    }
}
