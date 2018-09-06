using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface ITravelExpensesWithVoucherRepository : IRepository<TravelExpensesWithVoucherInfo>
    {
        void AddTravelExpensesWithVoucherOptions(List<TravelExpensesWithVoucherInfo> travelExpensesWithVoucherItems);
        List<TravelExpensesWithVoucherInfo> GetTravelExpensesWithVoucherForRequest(int id);
    }
}
