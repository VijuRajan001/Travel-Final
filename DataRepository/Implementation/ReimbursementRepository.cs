using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using DataAccessRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace DataAccessRepository.Implementation
{
    public class ReimbursementRepository : Repository<ReimbursementInfo>//, IReimbursementRepository
    {
        
        //public ReimbursementRepository(TravDeskDbcontext context) : base(context)
        //{
            

        //}
        //public IEnumerable<ReimbursementInfo> GetAllReimbursementsWithStatus(int status)
        //{
        //    return TravDeskDbcontext.ReimbursementInfo.Include(c => c.ReimbursementStatus == "draft");
        //}

        //public TravDeskDbcontext TravDeskDbcontext
        //{
        //    get { return Context as TravDeskDbcontext; }
        //}
    }
}
