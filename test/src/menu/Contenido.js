import React, { useEffect, useState } from 'react';
import "./contenido.css"
import { Carousel } from 'react-responsive-carousel';
import { Resizable } from 're-resizable';
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grafico from "../componentes/graficos/Grafico"

export default function Contenido() {
    const [dataCharts, setDataCharts] = useState(null)

    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {
        await axios({

            method: "get",

            url: `https://localhost:44326/api/chart`,

            responseType: "json"
        }).then((response) => {
            console.log(response.data)
            setDataCharts(response.data)
        })
    }

    if (dataCharts === null)
        return (<div>Cargando</div>)

    return (

        <div className="contenido">


            {/* Cuadrado 1 */}
            <Carousel className="divTop" showThumbs={false}  >
                <div className={"divGraf"} >
                    <Grafico className={""} data={dataCharts != null ? dataCharts[0] : dataCharts} />

                </div>
                <div>
                    <img className="img" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>

            </Carousel>
            {/* Cuadrado 2 */}
            <Carousel className="divTopPequeño" autoPlay={true} showThumbs={false} >
                <div>
                    <img className="img" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>
                <div className={"divGraf"}>
                    <Grafico className={""} data={dataCharts != null ? dataCharts[1] : dataCharts} />

                </div>
            </Carousel>
            {/* Cuadrado 3 */}
            <Carousel className="divCenter" autoPlay={true} showThumbs={false}>
                <div>
                    <img className="imgCenter" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>
                <div className={"divGraf"} >
                    <Grafico className={""} data={dataCharts != null ? dataCharts[2] : dataCharts} />

                </div>
            </Carousel>
            {/* Cuadrado 4 */}
            <Carousel className="divCenter" autoPlay={true} showThumbs={false}>
                <div>
                    <img className="imgCenter" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>
                <div className={"divGraf"} >
                    <Grafico className={""} data={dataCharts != null ? dataCharts[3] : dataCharts} />

                </div>
            </Carousel>
            {/* Cuadrado 5 */}
            <Carousel className="divCenter" autoPlay={true} showThumbs={false}>
                <div>
                    <img className="imgCenter" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>
                <div className={"divGraf"} >
                    <Grafico className={""} data={dataCharts != null ? dataCharts[3] : dataCharts} />

                </div>
            </Carousel>
            {/* Cuadrado 6 */}

            <Carousel className="divCenter" autoPlay={true} showThumbs={false}>
                <div className={"divGraf"} >
                    <Grafico className={""} data={dataCharts != null ? dataCharts[0] : dataCharts} />

                </div>
                <div>
                    <img className="imgCenter" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>

            </Carousel>
            {/* Cuadrado 7 */}
            <Carousel className="divTopPequeño" autoPlay={true} showThumbs={false} >
                <div>
                    <img className="img" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>
                <div className={"divGraf"}>
                    <Grafico className={""} data={dataCharts != null ? dataCharts[0] : dataCharts} />

                </div>
            </Carousel>
            {/* Cuadrado 8 */}
            <Carousel className="divTop" showThumbs={false}  >
                <div className={"divGraf"} >
                    <Grafico className={""} data={dataCharts != null ? dataCharts[0] : dataCharts} />

                </div>
                <div>
                    <img className="img" src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=3251%2C1972&ssl=1" />

                </div>

            </Carousel>

        </div>
    )
}