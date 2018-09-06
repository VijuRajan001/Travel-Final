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

namespace DataAccessRepository.Implementation
{
    public class ForexRepository : Repository<ForexInfo>, IForexRepository
    {
        private readonly ConnectionStrings connectionStrings;

        public ForexRepository(IOptions<ConnectionStrings> options)
        {

            connectionStrings = options.Value;
        }

        public ForexInfo GetForexDetails(int requestId)
        {
            try
            {
                ForexInfo forexInfo = new ForexInfo();
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    using (SqlCommand cmd = new SqlCommand("stp_trv_getForexInfoByRequestId", sqlCon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@RequestId", requestId);


                        sqlCon.Open();

                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {

                                forexInfo.Id = DataHelper.ConvertTo<int>(reader["ForexInfoId"]);
                                forexInfo.CardNumber = DataHelper.ConvertTo<string>(reader["CardNumber"]);
                                forexInfo.CardType = DataHelper.ConvertTo<string>(reader["CardType"]);
                                forexInfo.CardExpiryDate = DataHelper.ConvertTo<DateTime>(reader["CardExpiryDate"]);
                                forexInfo.RequestInfoId = DataHelper.ConvertTo<int>(reader["RequestInfoId"]);
                              
                            }
                        }

                        reader.Close();



                    }

                }

                return forexInfo;

            }
            catch (Exception ex)
            {
                throw ex;

            }
        }


        //public TravDeskDbcontext TravDeskDbcontext
        //{
        //    get { return Context as TravDeskDbcontext; }
        //}




        //public ForexInfo GetForexDetails(int requestId)
        //{


        //    return TravDeskDbcontext.ForexInfo
        //        .Where(f => f.RequestInfoId == requestId)
        //        .DefaultIfEmpty(new ForexInfo())
        //        .Single();
        //}

    }
}
