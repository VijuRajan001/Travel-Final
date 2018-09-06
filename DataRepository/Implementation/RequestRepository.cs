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

namespace DataAccessRepository.Implementation
{
    public class RequestRepository : Repository<RequestInfo>, IRequestRepository
    {
        private readonly ConnectionStrings connectionStrings;
        private readonly IFlightRepository _flightRepository;
        private readonly IHotelRepository _hotelRepository;
        private readonly IForexRepository _forexRepository;
        private readonly IPassportRepository _passRepository;

        public RequestRepository(IOptions<ConnectionStrings> options, IFlightRepository flightRepository, IHotelRepository hotelRepository, IForexRepository forexRepository, IPassportRepository passportRepository)
        {
            connectionStrings = options.Value;
            _flightRepository = flightRepository;
            _hotelRepository = hotelRepository;
            _forexRepository = forexRepository;
            _passRepository = passportRepository;


        }

        public void AddRequest(RequestInfo request)
        {
            RequestInfo RequestList = new RequestInfo();
            

            try
            {
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    using (SqlCommand cmd = new SqlCommand("stp_trv_insertIntoRequestInfo", sqlCon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@ProjectCode", request.ProjectId);
                        cmd.Parameters.AddWithValue("@EmployeeName", request.EmployeeName);
                        cmd.Parameters.AddWithValue("@EmployeeId", request.EmployeeId);
                        cmd.Parameters.AddWithValue("@TravelStart", request.TravelStart);
                        cmd.Parameters.AddWithValue("@TravelReturn", request.TravelReturn);
                        cmd.Parameters.AddWithValue("@TravelCountry", request.TravelCountry);
                        cmd.Parameters.AddWithValue("@RequestStatus", request.RequestStatus);
                        cmd.Parameters.AddWithValue("@QueueId", request.QueueId);
                        cmd.Parameters.AddWithValue("@Approver", request.Approver);
                        cmd.Parameters.AddWithValue("@CreatedBy", request.CreatedBy);

                        sqlCon.Open();

                        cmd.ExecuteNonQuery();



                    }

                }



            }
            catch (Exception ex)
            {
                throw ex;

            }

        }

        public IEnumerable<RequestInfo> GetAllRequestsWithStatus(string Login)
        {
            List<RequestInfo> RequestList = new List<RequestInfo>();
            try
            {
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    using (SqlCommand cmd = new SqlCommand("stp_trv_GetAllRequests", sqlCon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@login", Login);
                        sqlCon.Open();

                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                RequestInfo req = new RequestInfo();
                                req.Id = DataHelper.ConvertTo<int>(reader["RequestInfoId"]);
                                req.ProjectId = DataHelper.ConvertTo<string>(reader["ProjectCode"]);
                                req.EmployeeId = DataHelper.ConvertTo<string>(reader["EmployeeId"]);
                                req.EmployeeName = DataHelper.ConvertTo<string>(reader["EmployeeName"]);
                                req.TravelCountry = DataHelper.ConvertTo<string>(reader["TravelCountry"]);
                                req.QueueId = DataHelper.ConvertTo<int>(reader["QueueId"]);
                                req.RequestStatus = DataHelper.ConvertTo<string>(reader["RequestStatus"]);
                                req.Approver = DataHelper.ConvertTo<string>(reader["Approver"]);
                                req.TravelStart = DataHelper.ConvertTo<DateTime>(reader["TravelStart"]);
                                req.TravelReturn = DataHelper.ConvertTo<DateTime>(reader["TravelReturn"]);
                                RequestList.Add(req);

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
            return RequestList;


        }

        public RequestInfo GetRequestDetails(int id)
        {
            
            try
            {
                RequestInfo req = new RequestInfo();
                string ConnectionPath = connectionStrings.DefaultConnection;
                using (var sqlCon = new SqlConnection(ConnectionPath))
                {
                    using (SqlCommand cmd = new SqlCommand("stp_trv_getRequestDetails", sqlCon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@RequestInfoId", id);


                        sqlCon.Open();
                         
                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                               
                                req.Id = DataHelper.ConvertTo<int>(reader["RequestInfoId"]);
                                req.EmployeeName = DataHelper.ConvertTo<string>(reader["EmployeeName"]);
                                req.RequestStatus = DataHelper.ConvertTo<string>(reader["RequestStatus"]);
                                req.TravelStart = DataHelper.ConvertTo<DateTime>(reader["TravelStart"]);
                                req.ProjectId = DataHelper.ConvertTo<string>(reader["ProjectCode"]);
                                req.EmployeeId = DataHelper.ConvertTo<string>(reader["EmployeeId"]);
                                req.TravelCountry = DataHelper.ConvertTo<string>(reader["TravelCountry"]);
                                req.TravelReturn = DataHelper.ConvertTo<DateTime>(reader["TravelReturn"]);
                                req.QueueId = DataHelper.ConvertTo<int>(reader["QueueId"]);
                                req.Approver = DataHelper.ConvertTo<string>(reader["Approver"]);


                            }
                        }

                        reader.Close();



                    }

                }


                req.FlightInfo = _flightRepository.GetFlightsForRequest(id);
                //req.HotelInfo = _hotelRepository.GetHotelsForRequest(id);
                //req.ForexInfo = _forexRepository.GetForexDetails(id);
                //req.PassportInfo = _passRepository.GetPassportDetails(id);

                return req;

            }
            catch (Exception ex)
            {
                throw ex;

            }
        }


    }
}
