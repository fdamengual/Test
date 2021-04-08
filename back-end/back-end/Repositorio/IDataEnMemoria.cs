using back_end.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Repositorio
{
    public interface IDataEnMemoria
    {
        List<Chart> ObtenerCharts();
        List<Img> ObtenerImgs();
    }
}
