using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface IFlightRepository: IRepository<FlightInfo>
    {
        void AddOnwardFlightOptions(List<FlightInfo> FlightItems );
        void AddReturnFlightOptions(List<FlightInfo> FlightItems);
        List<FlightInfo> GetFlightsForRequest(int id);
    }
}
