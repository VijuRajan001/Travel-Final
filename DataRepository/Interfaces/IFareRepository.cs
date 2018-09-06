using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface IFareRepository : IRepository<FareInfo>
    {
        void AddFare(List<FareInfo> fareItems );
        List<FareInfo> GetFareForRequest(int id);
    }
}
