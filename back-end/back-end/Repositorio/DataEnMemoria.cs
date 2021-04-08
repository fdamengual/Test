using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Repositorio
{
    public class DataEnMemoria : IDataEnMemoria
    {

        
        private List<Entidades.Chart> _charts;
        private List<Entidades.Img> _imgs;
        public DataEnMemoria()
        {
            _charts = new List<Entidades.Chart>()
            {
                new Entidades.Chart(){Id=1,Type="bar",Label="Ciudades-x-mil",Data=new int[]{100,300,500,70,95},Colores=new string[]{ "rgb(144, 108, 22 )", "rgb(47, 141, 22,0.5 )", "rgb(63, 95, 133  )", "rgb(97, 32, 85 ,0.4 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"San Luis","Villa Mercedez","Cordoba","Mendoza","La Pampa" } },
                new Entidades.Chart(){Id=2,Type="pie",Label="Coca",Data=new int[]{100,152,351,100,57},Colores=new string[]{"rgb(47, 141, 22,0.5 )", "rgb(63, 95, 133  )", "rgb(97, 32, 85 ,0.4 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"Azucar","Agua","Sodio","Carbohidratos","Conservantes" } },
                new Entidades.Chart(){Id=3,Type="line",Label="C° San Luis",Data=new int[]{35,28,15,24,27},Colores=new string[]{ "rgb(144, 108, 22 )", "rgb(47, 141, 22,0.5 )", "rgb(63, 95, 133  )", "rgb(97, 32, 85 ,0.4 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"Lunes","Martes","Miercoles","Jueves","Viernes" } },
                new Entidades.Chart(){Id=4,Type="line",Label="C° Villa Mercedez",Data=new int[]{37,30,10,14,20},Colores=new string[]{ "rgb(144, 108, 22 )", "rgb(47, 141, 22,0.5 )", "rgb(63, 95, 133  )", "rgb(97, 32, 85 ,0.4 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"Lunes","Martes","Miercoles","Jueves","Viernes" } },
                new Entidades.Chart(){Id=5,Type="radar",Label="Messi",Data=new int[]{100,98,175,75,33},Colores=new string[]{ "rgb(144, 108, 22 )", "rgb(47, 100, 22,0.5 )", "rgb(63, 95, 100,0.4  )", "rgb(97, 32, 85 ,0.4 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"Velocidad","Agilidad","Altura","Dinero en millones","Edad" } },
                 new Entidades.Chart(){Id=6,Type="line",Label="Cadena",Data=new int[]{100,-98,175,75,-33},Colores=new string[]{ "rgb(200, 108, 87,0.7 )", "rgb(47, 100, 22,0.5 )", "rgb(63, 95, 100,0.4  )", "rgb(56, 115, 85 ,0.7 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"Dureza","Martensita","Hierro","Eslabones","Tenacidad" }},
                  new Entidades.Chart(){Id=5,Type="radar",Label="Cafe",Data=new int[]{150,200,86,234,111},Colores=new string[]{ "rgb(30, 150, 22,0.6 )", "rgb(100, 100, 22,0.5 )", "rgb(200, 95, 100,0.4  )", "rgb(97, 168, 85 ,0.9 )", "rgb(33, 31, 49 ,0.6 )" },Labels=new string[]{"Densidad","Carbohidratos","Azucares","Calorias","Valor nutricional" } },
            };
            _imgs = new List<Entidades.Img>()
            {
                new Entidades.Img(){Id=1,Url="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1"},
                new Entidades.Img(){Id=2,Url="https://www.researchgate.net/profile/Gaston-Perman/publication/224767021/figure/fig1/AS:393832937082898@1470908497810/figura-1Este-grafico-llamado-radar-por-su-forma-no-por-el-sistema-de-salud-tipo.png"},
                 new Entidades.Img(){Id=3,Url="https://i.ytimg.com/vi/hKe_jp6dqo4/maxresdefault.jpg"},
                 new Entidades.Img(){Id=4,Url="https://cdn.pixabay.com/photo/2013/07/12/15/21/pie-chart-149727_1280.png"},
                 new Entidades.Img(){Id=5,Url="https://infogram.zendesk.com/hc/article_attachments/360008219939/Bar_race.gif"},
            };

        }

        public List<Entidades.Chart> ObtenerCharts()
        {
            return _charts;
        }
        public List<Entidades.Img> ObtenerImgs()
        {
            return _imgs;
        }
    }
}
