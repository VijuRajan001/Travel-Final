using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class PassportInfo
    {
        public int Id { get; set; }
        public string PassportNumber { get; set; }
        public string VisaNumber { get; set; }
        public DateTime? VisaExpiryDate { get; set; }
        public DateTime? PassportExpiryDate { get; set; }

        public int RequestInfoId { get; set; }
        public virtual RequestInfo RequestInfo { get; set; }
    }
}
