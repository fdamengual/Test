import React, { useEffect, useState } from 'react';
import "./contenido.css"
import { Carousel } from 'react-responsive-carousel';
import { Resizable } from 're-resizable';
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grafico from "../componentes/graficos/Grafico"
import ReactLoading from 'react-loading';

export default function Contenido() {
    const [dataCharts, setDataCharts] = useState(null)

    useEffect(() => {
        setTimeout(() => { getData() }, 2000)


    }, [])

    const getData = async () => {
        await axios({

            method: "get",

            url: `http://localhost:5001/api/chart`,

            responseType: "json"
        }).then((response) => {
            console.log(response.data)
            setDataCharts(response.data)
        })
    }

    // if (dataCharts === null)
    //     return (<div><ReactLoading type={"spin"} color={"blue"} className="divGraf" /></div>)

    return (

        <div className="contenido">

            {/* Cuadrado 1 */}
            <Carousel className="divTop" showThumbs={false} infiniteLoop={true}  >

                {dataCharts ? <div className={"divGraf"} >
                    <Grafico className={""} data={dataCharts != null ? dataCharts[0] : dataCharts} />

                </div > : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}
                <div>
                    <img className="img" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>

            </Carousel>
            {/* Cuadrado 2 */}
            <Carousel className="divTopPequeño" infiniteLoop={true} interval={3000} autoPlay={true} showThumbs={false} >
                <div className={"divGraf"}>


                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={""} data={dataCharts != null ? dataCharts[1] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}
                </div>
                <div>
                    <img className="img" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>

            </Carousel>
            {/* Cuadrado 3 */}
            <Carousel className="divCenter" infiniteLoop={true} autoPlay={true} showThumbs={false}>
                <div className={"divGraf"} >

                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={""} data={dataCharts != null ? dataCharts[2] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}
                </div>
                <div>
                    <img className="imgCenter" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>

            </Carousel>
            {/* Cuadrado 4 */}
            <Carousel className="divCenter" infiniteLoop={true} interval={3000} autoPlay={true} showThumbs={false}>
                <div>
                    <img className="imgCenter" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>
                <div className={"divGraf"} >
                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={""} data={dataCharts != null ? dataCharts[2] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}
                </div>
            </Carousel>
            {/* Cuadrado 5 */}
            <Carousel className="divCenter" infiniteLoop={true} showThumbs={false}>
                <div>
                    <img className="imgCenter" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>
                <div className={"divGraf"} >
                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={""} data={dataCharts != null ? dataCharts[2] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}

                </div>
            </Carousel>
            {/* Cuadrado 6 */}

            <Carousel className="divCenter" infiniteLoop={true} interval={3000} autoPlay={true}>
                <div className={"divGraf"} >
                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={""} data={dataCharts != null ? dataCharts[4] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}

                </div>
                <div>
                    <img className="imgCenter" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>

            </Carousel>
            {/* Cuadrado 7 */}
            <Carousel className="divTopPequeño" infiniteLoop={true} interval={3000} autoPlay={true} showThumbs={false} >
                <div>
                    <img className="img" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>
                <div className={"divGraf"}>
                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={""} data={dataCharts != null ? dataCharts[1] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}

                </div>
            </Carousel>
            {/* Cuadrado 8 */}
            <Carousel className="divTop" infiniteLoop={true} showThumbs={false}  >
                <div className={"divGraf"} >
                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={""} data={dataCharts != null ? dataCharts[5] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}
                </div>
                <div>
                    <img className="img" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>

            </Carousel>

        </div>
    )
}