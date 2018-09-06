using DataAccessRepository.Base;
using DataRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataRepository.Interfaces
{
   public interface ILookUpRepository : IRepository<LookUp>
    {

        List<LookUp> GetCountryList();
    }
}
