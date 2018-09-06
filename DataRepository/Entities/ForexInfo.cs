using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class ForexInfo
    {
        public int Id { get; set; }

        public string CardNumber { get; set; }
        public string CardType { get; set; }
        public DateTime? CardExpiryDate { get; set; }
        
        public int RequestInfoId { get; set; }
        public RequestInfo RequestInfo { get; set; }
    }
}
