using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface IForexRepository : IRepository<ForexInfo>
    {
        ForexInfo GetForexDetails(int requestId);

    }
}
