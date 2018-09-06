using DataAccessRepository.Base;
using DataRepository.Core;
using DataRepository.Entities;
using DataRepository.Interfaces;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace DataRepository.Implementation
{
    public class LookUpRepository : Repository<LookUp>, ILookUpRepository
    {
        private readonly ConnectionStrings connectionStrings;

        public LookUpRepository(IOptions<ConnectionStrings> options)
        {
            connectionStrings = options.Value;

        }

        public List<LookUp> GetCountryList()
        {
            try
            {
                List<LookUp> listLookUpInfo = new List<LookUp>();
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    using (SqlCommand cmd = new SqlCommand("stp_trv_getCountryList", sqlCon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        sqlCon.Open();

                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                LookUp lookUpInfo = new LookUp();
                                lookUpInfo.value = DataHelper.ConvertTo<string>(reader["CO_CountryCode"]);
                                lookUpInfo.Description = DataHelper.ConvertTo<string>(reader["CO_ConutryName"]);
                                listLookUpInfo.Add(lookUpInfo);
                            }
                        }

                        reader.Close();



                    }

                }

                return listLookUpInfo;

            }
            catch (Exception ex)
            {
                throw ex;

            }
        }
    }
}
