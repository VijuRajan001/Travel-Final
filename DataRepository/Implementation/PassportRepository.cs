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
    public class PassportRepository : Repository<PassportInfo>, IPassportRepository
    {
        private readonly ConnectionStrings connectionStrings;

        public PassportRepository(IOptions<ConnectionStrings> options)
        {

            connectionStrings = options.Value;
        }


        //    public TravDeskDbcontext TravDeskDbcontext
        //    {
        //        get { return Context as TravDeskDbcontext; }
        //    }



        public PassportInfo GetPassportDetails(int requestId)
        {

            try
            {
                PassportInfo passportInfo = new PassportInfo();
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    using (SqlCommand cmd = new SqlCommand("stp_trv_getPassportDetails", sqlCon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@RequestId", requestId);


                        sqlCon.Open();

                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {

                                passportInfo.Id = DataHelper.ConvertTo<int>(reader["PassportInfoId"]);
                                passportInfo.PassportNumber = DataHelper.ConvertTo<string>(reader["PassportNumber"]);
                                passportInfo.VisaNumber = DataHelper.ConvertTo<string>(reader["VisaNumber"]);
                                passportInfo.VisaExpiryDate = DataHelper.ConvertTo<DateTime>(reader["VisaExpiryDate"]);
                                passportInfo.PassportExpiryDate = DataHelper.ConvertTo<DateTime>(reader["PassportExpiryDate"]);

                            }
                        }

                        reader.Close();



                    }

                }

                return passportInfo;

            }
            catch (Exception ex)
            {
                throw ex;

            }
        }
    }
}
