using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface IOtherExpensesRepository : IRepository<OtherExpensesInfo>
    {
        void AddOtherExpensesOptions(List<OtherExpensesInfo> otherExpensesItems);
        List<OtherExpensesInfo> GetOtherExpensesForRequest(int id);
    }
}
