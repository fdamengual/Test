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
        if (this.props.data.type == "radar") {
            let random = Math.floor(Math.random() * 4)
            console.log(random)
            this.myChart = new Chart(this.canvasRef.current, {
                type: this.props.data.type,
                options: {
                    maintainAspectRatio: this.props.className == "divTopPequeño" ? false : true,
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    }
                },
                data: {
                    labels: this.props.data.labels,
                    datasets: [{
                        label: 'My First Dataset',
                        data: this.props.data.data,
                        fill: true,
                        backgroundColor: this.props.data.colores[random],
                        borderColor: this.props.data.colores[random],
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: this.props.data.colores[random]
                    }]
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

        else if (this.props.data.type == "line") {
            let random = Math.floor(Math.random() * 5)
            console.log(random)
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
                    responsive: true,
                    maintainAspectRatio: this.props.className == "divCenter" ? true : false,
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
                    maintainAspectRatio: this.props.className == "divCenter" ? true : false,
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