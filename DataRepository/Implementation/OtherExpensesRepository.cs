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
    public class OtherExpensesRepository : Repository<OtherExpensesInfo>//, IOtherExpensesRepository
    {

        //public OtherExpensesRepository(TravDeskDbcontext context) : base(context)
        //{


        //}
      
        

        //public void AddOtherExpensesOptions(List<OtherExpensesInfo> otherExpensesItems)
        //{
        //    TravDeskDbcontext.OtherExpensesInfo.AddRange(otherExpensesItems);
        //}

        //List<OtherExpensesInfo> IOtherExpensesRepository.GetOtherExpensesForRequest(int id)
        //{
        //    List<OtherExpensesInfo> OtherExpensesInfo = new List<OtherExpensesInfo>();
        //    OtherExpensesInfo = TravDeskDbcontext.OtherExpensesInfo.Where(f => f.ReimbursementInfoId == id).ToList();

        //    return OtherExpensesInfo;
        //}

        //public TravDeskDbcontext TravDeskDbcontext
        //{
        //    get { return Context as TravDeskDbcontext; }
        //}
    }
}
