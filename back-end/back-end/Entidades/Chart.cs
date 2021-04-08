using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Entidades
{
    public class Chart
    {
        public int Id {get;set;}

        public string Type { get; set; }
        public string Label{ get; set; }
        public int[] Data { get; set; }

        public string[] Colores { get; set; }
        public String[] Labels { get; set; }

    }
}
