using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface IHotelRepository : IRepository<HotelInfo>
    {
        //void AddHotelOptions(List<HotelInfo> hotelItems );
        List<HotelInfo> GetHotelsForRequest(int id);
        
    }
}
