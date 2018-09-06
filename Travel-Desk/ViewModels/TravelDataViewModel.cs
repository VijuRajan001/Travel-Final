using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelDesk.Models;

namespace TravelDesk.ViewModels
{
    public class TravelDataViewModel
    {
        public RequestItem requestItem {get;set;}
        public FlightOptionsViewModel flightItem { get; set; }


    }
}
