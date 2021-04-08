using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Repositorio
{
    public class DataEnMemoria : IDataEnMemoria
    {

        
        private List<Entidades.Chart> _charts;
        public DataEnMemoria()
        {
            _charts = new List<Entidades.Chart>()
            {
                new Entidades.Chart(){Id=1,Type="bar",Label="Ciudades-x-mil",Data=new int[]{100,300,500,70,95},Colores=new string[]{ "rgb(144, 108, 22 )", "rgb(47, 141, 22,0.5 )", "rgb(63, 95, 133  )", "rgb(97, 32, 85 ,0.4 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"San Luis","Villa Mercedez","Cordoba","Mendoza","La Pampa" } },
                new Entidades.Chart(){Id=1,Type="pie",Label="Coca",Data=new int[]{100,152,351,100},Colores=new string[]{"rgb(47, 141, 22,0.5 )", "rgb(63, 95, 133  )", "rgb(97, 32, 85 ,0.4 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"Azucar","Agua","Sodio","Carboidratos","Conservantes" } },
                new Entidades.Chart(){Id=1,Type="line",Label="C° San Luis",Data=new int[]{35,28,15,24,27},Colores=new string[]{ "rgb(144, 108, 22 )", "rgb(47, 141, 22,0.5 )", "rgb(63, 95, 133  )", "rgb(97, 32, 85 ,0.4 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"Lunes","Martes","Miercoles","Jueves","Viernes" } },
                new Entidades.Chart(){Id=1,Type="line",Label="C° Villa Mercedez",Data=new int[]{37,30,10,14,20},Colores=new string[]{ "rgb(144, 108, 22 )", "rgb(47, 141, 22,0.5 )", "rgb(63, 95, 133  )", "rgb(97, 32, 85 ,0.4 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"Lunes","Martes","Miercoles","Jueves","Viernes" } }
            };

        }

        public List<Entidades.Chart> ObtenerCharts()
        {
            return _charts;
        }
    }
}
