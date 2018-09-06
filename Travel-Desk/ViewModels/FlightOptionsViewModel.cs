using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelDesk.Models;

namespace TravelDesk.ViewModels
{
    public class FlightOptionsViewModel
    { 
        public List<FlightItem> OnwardFlightItems { get; set; }
        public List<FlightItem> ReturnFlightItems { get; set; }
    }
}
