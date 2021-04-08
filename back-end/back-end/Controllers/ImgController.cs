using back_end.Repositorio;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/img")]
    public class ImgController
    {
        private readonly IDataEnMemoria data;

        public ImgController(Repositorio.IDataEnMemoria data)
        {
            this.data = data;
           
        }

        [HttpGet]
        public List<Entidades.Img> Get()
        {
            return data.ObtenerImgs();
        }
    }

}
