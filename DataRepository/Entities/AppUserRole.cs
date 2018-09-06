using System;
using System.Collections.Generic;
using System.Text;

namespace DataRepository.Entities
{
    public class AppUserRole
    {
        public int AppId { get; set; }
        public int Read { get; set; }
        public int Write { get; set; }
        public int Modify { get; set; }
        public string RoleName { get; set; }
        public int Approve { get; set; }

    }
}
