using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface IReimbursementRepository :IRepository<ReimbursementInfo>
    {
        IEnumerable<ReimbursementInfo> GetAllReimbursementsWithStatus(int status);

    }
}
