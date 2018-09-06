using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataRepository.Interfaces
{
    public interface IAuthRepository
    {
        AppUserLogin Login(string UserName, string Password);
        
    }
}
