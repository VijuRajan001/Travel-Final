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
    public class BoardingLodgingRepository : Repository<BoardingLodgingInfo>
    {

        public BoardingLodgingRepository() 
        {


        }



        //public void AddBoardingLodging(List<BoardingLodgingInfo> boardingLodgingItems)
        //{
        //    TravDeskDbcontext.BoardingLodgingInfo.AddRange(boardingLodgingItems);
        //}

        //List<BoardingLodgingInfo> IBoardingLodgingRepository.GetBoardingLodgingForRequest(int id)
        //{
        //    List<BoardingLodgingInfo> BoardingLodgingInfo = new List<BoardingLodgingInfo>();
        //    BoardingLodgingInfo = TravDeskDbcontext.BoardingLodgingInfo.Where(f => f.ReimbursementInfoId == id).ToList();

        //    return BoardingLodgingInfo;
        //}

        //public TravDeskDbcontext TravDeskDbcontext
        //{
        //    get { return Context as TravDeskDbcontext; }
        //}
    }
}
