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
    public class TravelExpensesWithVoucherRepository : Repository<TravelExpensesWithVoucherInfo>, ITravelExpensesWithVoucherRepository
    {

        public TravelExpensesWithVoucherRepository() 
        {


        }
      
        

        public void AddTravelExpensesWithVoucherOptions(List<TravelExpensesWithVoucherInfo> travelExpensesWithVoucherItems)
        {
            
        }

        List<TravelExpensesWithVoucherInfo> ITravelExpensesWithVoucherRepository.GetTravelExpensesWithVoucherForRequest(int id)
        {
            return null;
        }
        
    }
}
