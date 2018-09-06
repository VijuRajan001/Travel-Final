using DataAccessRepository.Entities;
using DataRepository.Core;
using DataRepository.Interfaces;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace DataRepository.Implementation
{
    public class AuthRepository : IAuthRepository
    {
        private readonly ConnectionStrings connectionStrings;

        public AuthRepository(IOptions<ConnectionStrings> options)
        {
            connectionStrings = options.Value;
        }

        public AppUserLogin Login(string UserName, string Password)
        {
            AppUserLogin User = new AppUserLogin();
            try
            {
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    using (SqlCommand cmd = new SqlCommand("stp_ValidateUser", sqlCon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@Login",UserName);
                        cmd.Parameters.AddWithValue("@active","yes");
                        cmd.Parameters.AddWithValue("@pw",Password);

                        sqlCon.Open();
                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                User.Name =  DataHelper.ConvertTo<string>(reader["user_name"]);
                                User.Email = DataHelper.ConvertTo<string>(reader["UEmailId"]);
                                User.LoginId = DataHelper.ConvertTo<string>(reader["Login"]);
                            }
                        }

                        reader.Close();

                    }

                }



            }
            catch (Exception ex)
            {
                throw ex;

            }
            return User;

        }
    }
}
