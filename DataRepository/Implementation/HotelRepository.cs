using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using DataAccessRepository.Interfaces;
using DataRepository.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace DataAccessRepository.Implementation
{
    public class HotelRepository : Repository<HotelInfo>, IHotelRepository
    {
        private readonly ConnectionStrings connectionStrings;

        public HotelRepository(IOptions<ConnectionStrings> options)
        {
            connectionStrings = options.Value;

        }

        //public void AddHotelOptions(List<HotelInfo> hotelItems)
        //{
           
        //}

        public List<HotelInfo> GetHotelsForRequest(int id)
        {
            try
            {
                List<HotelInfo> listHotelInfo = new List<HotelInfo>();
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    using (SqlCommand cmd = new SqlCommand("stp_trv_getHotelInfoByRequestId", sqlCon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@RequestId", id);


                        sqlCon.Open();

                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                HotelInfo hotelInfo = new HotelInfo();
                                hotelInfo.Id = DataHelper.ConvertTo<int>(reader["HotelInfoId"]);
                                hotelInfo.HotelName = DataHelper.ConvertTo<string>(reader["HotelName"]);
                                hotelInfo.Location = DataHelper.ConvertTo<string>(reader["Location"]);
                                hotelInfo.Amenities = DataHelper.ConvertTo<string>(reader["Amenities"]);
                                hotelInfo.CheckinTime = DataHelper.ConvertTo<DateTime>(reader["CheckinTime"]);
                                hotelInfo.CheckoutTime = DataHelper.ConvertTo<DateTime>(reader["CheckoutTime"]);
                                hotelInfo.Charges = DataHelper.ConvertTo<double>(reader["Charges"]);
                                hotelInfo.Remarks = DataHelper.ConvertTo<string>(reader["[Remarks]"]);
                                listHotelInfo.Add(hotelInfo);
                            }
                        }

                        reader.Close();



                    }

                }

                return listHotelInfo;
                
            }
            catch (Exception ex)
            {
                throw ex;

            }
        }



        //public void AddHotelOptions(List<HotelInfo> hotelItems)
        //{
        //    TravDeskDbcontext.HotelInfo.AddRange(hotelItems);
        //}

        //List<HotelInfo> IHotelRepository.GetHotelsForRequest(int id)
        //{
        //    List<HotelInfo> HotelInfo = new List<HotelInfo>();
        //    HotelInfo = TravDeskDbcontext.HotelInfo.Where(f => f.RequestInfoId == id).ToList();

        //    return HotelInfo;
        //}

        //public TravDeskDbcontext TravDeskDbcontext
        //{
        //    get { return Context as TravDeskDbcontext; }
        //}
    }
}
