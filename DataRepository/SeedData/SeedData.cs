using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace DataAccessRepository.SeedData
{
    public class SeedData
    {

        //public static void SeedUsers(UserManager<AppUser> userManager)
        //{
        //    if (userManager.FindByNameAsync("user1").Result == null)
        //    {
        //        AppUser user = new AppUser();
        //        user.UserName = "user1";
        //        user.Email = "user1@localhost";
                

        //        IdentityResult result = userManager.CreateAsync(user, "password1").Result;

                
        //    }


        //    if (userManager.FindByNameAsync("user2").Result == null)
        //    {
        //        AppUser user = new AppUser();
        //        user.UserName = "user2";
        //        user.Email = "user2@localhost";
                

        //        IdentityResult result = userManager.CreateAsync(user, "password2").Result;
                
        //    }
        //}

        //////Insert data using entity framework
        ////public static void EntityInsert()
        ////{
        ////    var context = new TravDeskDbcontext();
        ////    var req = new RequestInfo()
        ////    {
        ////        RequestId = 24,
        ////        ProjectId = 444,
        ////        EmployeeName = "Bill",
        ////        EmployeeId = "Bill12",
        ////        ManagerId = "Gates12",
        ////        ManagerName = "Gates",
        ////        TravelStart = new DateTime(2018,11,24),
        ////        TravelReturn = new DateTime(2018, 11, 28),
        ////        TravelCountry = "Finland",
        ////        RequestStatus = "Approved",
        ////        Approver= "Steve"
        ////    };
        ////    context.RequestInfo.Add(req);

        ////    var passport = new PassportInfo()
        ////    {
        ////        PassportNumber = 201883,
        ////        VisaNumber = 340595,
        ////        VisaExpiryDate = new DateTime(2020,12,8),
        ////        PassportExpiryDate = new DateTime(2020,3,4)
        ////    };
        ////    context.PassportInfo.Add(passport);

        ////    var hotel = new HotelInfo()
        ////    {
        ////        RequestId = 24,
        ////        HotelName = "Taj",
        ////        Location = "Mumbai",
        ////        Amenities = "AC,Wifi",
        ////        Website = "www.tajhotels.com",
        ////        MobileNo = "+91-8197511188",
        ////        CheckinTime = new DateTime(2018,11,24),
        ////        CheckoutTime = new DateTime(2018,11,28),
        ////        Price = 22094.83
        ////    };
        ////    context.HotelInfo.Add(hotel);

        ////    var forex = new ForexInfo()
        ////    {
        ////       CardNumber = 283748,
        ////       CountryCode = "+91",
        ////       MobileNo = 6374638744
        ////    };
        ////    context.ForexInfo.Add(forex);

        ////    var flight = new FlightInfo()
        ////    {
        ////        RequestId = 24,
        ////        FlightNo = 232444,
        ////        FlightCarrierName = "Boeing777",
        ////        To = "Mumbai",
        ////        From = "Bangalore",
        ////        Price = 13999.00
        ////    };
        ////    context.FlightInfo.Add(flight);


        ////    context.SaveChanges();
        ////}


        //////Delete data using entity framework
        ////public static void EntityDelete(var context = new TravDeskDbcontext())
        ////{
        ////    var req = context.RequestInfo.This<RequestInfo> ();
        ////    context.RequestInfo.remove(req);

        ////    var flight = context.FlightInfo.This<FlightInfo>();
        ////    context.FlightInfo.remove(flight);

        ////    var forex = context.ForexInfo.This<ForexInfo>();
        ////    context.RequestInfo.remove(req);

        ////    var hotel = context.HotelInfo.This<HotelInfo>();
        ////    context.RequestInfo.remove(req);

        ////    var passport = context.PassportInfo.This<PassportInfo>();
        ////    context.RequestInfo.remove(req);

        ////    context.SaveChanges();
        ////}



    }
}
