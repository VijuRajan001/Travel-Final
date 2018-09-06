using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface IPassportRepository : IRepository<PassportInfo>
    {
        PassportInfo GetPassportDetails(int requestId);

    }
}
