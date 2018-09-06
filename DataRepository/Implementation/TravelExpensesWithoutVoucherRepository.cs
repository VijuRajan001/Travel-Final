using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using DataAccessRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccessRepository.Implementation
{
    public class TravelExpensesWithoutVoucherRepository : Repository<TravelExpensesWithoutVoucherInfo>, ITravelExpensesWithoutVoucherRepository
    {

        public TravelExpensesWithoutVoucherRepository() 
        {


        }



        public void AddTravelExpensesWithoutVoucherOptions(List<TravelExpensesWithoutVoucherInfo> travelExpensesWithoutVoucherItems)
        {
          
        }

        List<TravelExpensesWithoutVoucherInfo> ITravelExpensesWithoutVoucherRepository.GetTravelExpensesWithoutVoucherForRequest(int id)
        {
            return null;
        }

       
    }
}
