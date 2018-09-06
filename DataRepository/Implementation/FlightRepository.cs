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
    public class FlightRepository : Repository<FlightInfo>, IFlightRepository
    {
        private readonly ConnectionStrings connectionStrings;

        public FlightRepository(IOptions<ConnectionStrings> options)
        {
            connectionStrings = options.Value;

        }


        public void AddOnwardFlightOptions(List<FlightInfo> FlightItems)
        {

            try
            {
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    sqlCon.Open();
                    foreach (var flight in FlightItems)
                    {

                        using (SqlCommand cmd = new SqlCommand("stp_trv_insertIntoFlightInfo", sqlCon))
                        {

                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.AddWithValue("@FlightItemId", flight.FlightItemId);
                            cmd.Parameters.AddWithValue("@FlightName", flight.FlightName);
                            cmd.Parameters.AddWithValue("@FlightTo", flight.FlightTo);
                            cmd.Parameters.AddWithValue("@FlightFrom", flight.FlightFrom);
                            cmd.Parameters.AddWithValue("@FlightCost", flight.FlightCost);
                            cmd.Parameters.AddWithValue("@FlightDirection", flight.FlightDirection);
                            cmd.Parameters.AddWithValue("@flightLayover", flight.flightLayover);
                            cmd.Parameters.AddWithValue("@flightLayoverHours", flight.flightLayoverHours);
                            cmd.Parameters.AddWithValue("@flightStartDate", flight.flightStartDate);
                            cmd.Parameters.AddWithValue("@flightEndDate", flight.flightEndDate);
                            cmd.Parameters.AddWithValue("@flightStartTime", flight.flightStartTime);
                            cmd.Parameters.AddWithValue("@flightEndTime", flight.flightEndTime);
                            cmd.Parameters.AddWithValue("@RequestId", flight.RequestInfoId);
                            cmd.ExecuteNonQuery();

                        }
                    }

                }

            }
            catch (Exception ex)
            {
                throw ex;

            }


        }



        public void AddReturnFlightOptions(List<FlightInfo> FlightItems)
        {
            try
            {
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    sqlCon.Open();
                    foreach (var flight in FlightItems)
                    {

                        using (SqlCommand cmd = new SqlCommand("stp_trv_insertIntoFlightInfo", sqlCon))
                        {

                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.AddWithValue("@FlightItemId", flight.FlightItemId);
                            cmd.Parameters.AddWithValue("@FlightName", flight.FlightName);
                            cmd.Parameters.AddWithValue("@FlightTo", flight.FlightTo);
                            cmd.Parameters.AddWithValue("@FlightFrom", flight.FlightFrom);
                            cmd.Parameters.AddWithValue("@FlightCost", flight.FlightCost);
                            cmd.Parameters.AddWithValue("@FlightDirection", flight.FlightDirection);
                            cmd.Parameters.AddWithValue("@flightLayover", flight.flightLayover);
                            cmd.Parameters.AddWithValue("@flightLayoverHours", flight.flightLayoverHours);
                            cmd.Parameters.AddWithValue("@flightStartDate", flight.flightStartDate);
                            cmd.Parameters.AddWithValue("@flightEndDate", flight.flightEndDate);
                            cmd.Parameters.AddWithValue("@flightStartTime", flight.flightStartTime);
                            cmd.Parameters.AddWithValue("@flightEndTime", flight.flightEndTime);
                            cmd.Parameters.AddWithValue("@RequestId", flight.RequestInfoId);
                            cmd.ExecuteNonQuery();

                        }
                    }

                }

            }
            catch (Exception ex)
            {
                throw ex;

            }
        }

        public List<FlightInfo> GetFlightsForRequest(int id)
        {
            List<FlightInfo> FlightInfo = new List<FlightInfo>();

            try
            {
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    using (SqlCommand cmd = new SqlCommand("stp_trv_GetFlightInfoByRequest", sqlCon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@RequestId", id);
                        sqlCon.Open();

                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                FlightInfo flight = new FlightInfo();
                                flight.Id = DataHelper.ConvertTo<int>(reader["FlightInfoId"]);
                                flight.FlightItemId = DataHelper.ConvertTo<string>(reader["FlightItemId"]);
                                flight.FlightName = DataHelper.ConvertTo<string>(reader["FlightName"]);
                                flight.FlightTo = DataHelper.ConvertTo<string>(reader["FlightTo"]);
                                flight.FlightFrom = DataHelper.ConvertTo<string>(reader["FlightFrom"]);
                                flight.FlightCost = DataHelper.ConvertTo<double>(reader["FlightCost"]);
                                flight.FlightDirection = DataHelper.ConvertTo<string>(reader["FlightDirection"]);
                                flight.flightLayover =  DataHelper.ConvertTo<string>(reader["FlightLayover"]);
                                flight.flightLayoverHours =  DataHelper.ConvertTo<int>(reader["FlightLayoverHours"]);
                                flight.flightStartDate  =  DataHelper.ConvertTo<DateTime>(reader["FlightStartDate"]);
                                flight.flightEndDate =  DataHelper.ConvertTo<DateTime>(reader["FlightEndDate"]);
                                flight.flightStartTime = DataHelper.ConvertTo<string>(reader["flightStartTime"]);
                                flight.flightEndTime = DataHelper.ConvertTo<string>(reader["flightEndTime"]);
                                FlightInfo.Add(flight);

                            }
                        }

                        reader.Close();
                    }
                }

                return FlightInfo;
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
    }
}
