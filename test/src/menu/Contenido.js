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
    const [dataImgs, setDataImgs] = useState(null)
    useEffect(() => {
        setTimeout(() => { getDataImg(); getDataChart(); }, 1400)


    }, [])

    const getDataChart = async () => {
        await axios({

            method: "get",

            url: `http://localhost:5001/api/chart`,

            responseType: "json"
        }).then((response) => {

            setDataCharts(response.data)
        }).catch((error) => { console.log(error) })

    }
    const getDataImg = async () => {
        await axios({

            method: "get",

            url: `http://localhost:5001/api/img`,

            responseType: "json"
        }).then((response) => {

            setDataImgs(response.data)
        }).catch((error) => { console.log(error) })

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
                    <img className="imgTopButtom" src={dataImgs ? dataImgs[4].url : "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg"} />

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
                    <img className="imgTopButtom" src={dataImgs ? dataImgs[1].url : "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg"} />

                </div>

            </Carousel>
            {/* Cuadrado 3 */}
            <Carousel className="divCenter" infiniteLoop={true} autoPlay={true} showThumbs={false}>
                <div className={"divGraf"} >

                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={"divCenter"} data={dataCharts != null ? dataCharts[2] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}
                </div>
                <div>
                    <img className="imgCenter" src={dataImgs ? dataImgs[2].url : "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg"} />

                </div>

            </Carousel>
            {/* Cuadrado 4 */}
            <Carousel className="divCenter" infiniteLoop={true} interval={3000} autoPlay={true} showThumbs={false}>
                <div>
                    <img className="imgCenter" src={dataImgs ? dataImgs[3].url : "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg"} />
                </div>
                <div className={"divGraf"} >
                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={"divCenter"} data={dataCharts != null ? dataCharts[1] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}
                </div>
            </Carousel>
            {/* Cuadrado 5 */}
            <Carousel className="divCenter" infiniteLoop={true} showThumbs={false}>
                <div>
                    <img className="imgCenter" src={dataImgs ? dataImgs[4].url : "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg"} />
                </div>
                <div className={"divGraf"} >
                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={"divCenter"} data={dataCharts != null ? dataCharts[5] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}

                </div>
            </Carousel>
            {/* Cuadrado 6 */}

            <Carousel className="divCenter" infiniteLoop={true} interval={3000} autoPlay={true}>
                <div className={"divGraf"} >
                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={"divCenter"} data={dataCharts != null ? dataCharts[4] : dataCharts} />

                    </div> : <div className="loadingDiv"><ReactLoading type={"spin"} color={"blue"} /> <p>Cargando</p></div>}

                </div>
                <div>
                    <img className="imgCenter" src={dataImgs ? dataImgs[0].url : "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg"} />
                </div>

            </Carousel>
            {/* Cuadrado 7 */}
            <Carousel className="divTopPequeño" infiniteLoop={true} interval={3000} autoPlay={true} showThumbs={false} >
                <div>
                    <img className="imgTopButtom" src={dataImgs ? dataImgs[3].url : "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg"} />
                </div>
                <div className={"divGraf"}>
                    {dataCharts ? <div className={"divGraf"} >
                        <Grafico className={"divTopPequeño"} data={dataCharts != null ? dataCharts[6] : dataCharts} />

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
                    <img className="imgTopButtom" src={dataImgs ? dataImgs[4].url : "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg"} />
                </div>

            </Carousel>

        </div>
    )
}