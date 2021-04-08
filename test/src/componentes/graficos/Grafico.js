import React, { Component } from "react";
import Chart from "chart.js"

class Graficos extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();

    }

    componentDidUpdate() {


        this.myChart.data.labels = this.props.data.labels;
        this.myChart.data.datasets[0].data = this.props.data.type;
        this.myChart.update();

    }

    componentDidMount() {
        let random = Math.floor(Math.random() * 5)
        console.log(random)
        if (this.props.data.type == "line") {
            this.myChart = new Chart(this.canvasRef.current, {
                type: "line",
                data: {
                    labels: this.props.data.labels,
                    datasets: [
                        {
                            label: 'Type Line',
                            data: this.props.data.data,
                            borderColor: this.props.data.colores[random],
                            backgroundColor: this.props.data.colores[random],
                            fill: true
                        }
                    ]

                },
                options: {
                    maintainAspectRatio: false,
                    animation: {
                        easing: "easeInOutElastic",
                        duration: 1300,
                    },

                },
                plugins: {
                    title: {
                        display: true,
                        text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
                    },
                    tooltip: {
                        mode: 'index'
                    },
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Month'
                        }
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Value'
                        }
                    }
                }
            });
        }
        else {
            this.myChart = new Chart(this.canvasRef.current, {
                type: this.props.data.type,
                options: {
                    maintainAspectRatio: false,
                    animation: {
                        easing: "easeInOutElastic",
                        duration: 1300,
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    min: 0
                                }
                            }
                        ],
                    }
                },
                data: {
                    labels: this.props.data.labels,
                    datasets: [{
                        label: this.props.data.label,
                        data: this.props.data.data,
                        backgroundColor: this.props.data.colores,
                    }]
                }
            });
        }
    }


    render() {
        if (this.props.data === null || this.props.data === "undefined") return (<div>Cargando</div>)
        return (
            <canvas ref={this.canvasRef} />
        );
    }
}

export default Graficos;