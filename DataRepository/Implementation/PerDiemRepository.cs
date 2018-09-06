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
    public class PerDiemRepository: Repository<PerDiemInfo>//,IPerDiemRepository
    {

        //public PerDiemRepository(TravDeskDbcontext context) : base(context)
        //{


        //}
      
        

        //public void AddPerDiemOptions(List<PerDiemInfo> perDiemItems)
        //{
        //    TravDeskDbcontext.PerDiemInfo.AddRange(perDiemItems);
        //}

        //List<PerDiemInfo> IPerDiemRepository.GetPerDiemForRequest(int id)
        //{
        //    List<PerDiemInfo> PerDiemInfo = new List<PerDiemInfo>();
        //    PerDiemInfo = TravDeskDbcontext.PerDiemInfo.Where(f => f.ReimbursementInfoId == id).ToList();

        //    return PerDiemInfo;
        //}


        //public void AddperDiemInfo(PerDiemInfo info)
        //{
        //    TravDeskDbcontext.PerDiemInfo.Add(info);
        //}


        //public TravDeskDbcontext TravDeskDbcontext
        //{
        //    get { return Context as TravDeskDbcontext; }
        //}
    }
}
