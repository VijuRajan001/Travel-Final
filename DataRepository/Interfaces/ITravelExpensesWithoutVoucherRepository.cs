using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface ITravelExpensesWithoutVoucherRepository : IRepository<TravelExpensesWithoutVoucherInfo>
    {
        void AddTravelExpensesWithoutVoucherOptions(List<TravelExpensesWithoutVoucherInfo> travelExpensesWithoutVoucherItems);
        List<TravelExpensesWithoutVoucherInfo> GetTravelExpensesWithoutVoucherForRequest(int id);
    }
}