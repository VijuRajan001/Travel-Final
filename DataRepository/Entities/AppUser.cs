using System;
using System.Collections.Generic;
using System.Text;

namespace DataRepository.Entities
{
    public class AppUser
    {   
        public string FullName { get; set; }
        public string LoginId { get; set; }
        public List<AppUserRole> Roles {get;set;}
        public List<LookUp> Projects { get; set;}
    }
}
