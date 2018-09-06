using DataRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataRepository.Interfaces
{
    public interface IUserRepository
    {
        AppUser GetUserDetails(string UserId);

    }
}
