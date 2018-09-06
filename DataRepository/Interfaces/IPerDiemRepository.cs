using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface IPerDiemRepository : IRepository<PerDiemInfo>
    {
        void AddPerDiemOptions(List<PerDiemInfo> perDiemItems );
        List<PerDiemInfo> GetPerDiemForRequest(int id);
        void AddperDiemInfo(PerDiemInfo info);

    }
}
