using back_end.Repositorio;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/chart")]
    public class ChartController
    {
        private readonly IDataEnMemoria data;

        public ChartController(Repositorio.IDataEnMemoria data)
        {
            this.data = data;
        }

        [HttpGet]
        public List<Entidades.Chart> Get()
        {
            return data.ObtenerCharts();
        }
    }
}
