import React, { Component } from "react";
import Chart from "chart.js"

class Graficos extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        console.log(props.data)
    }

    componentDidUpdate() {
        if (this.props.data) {
            this.myChart.data.labels = this.props.data.labels;
            this.myChart.data.datasets[0].data = this.props.data.type;
            this.myChart.update();
        }
    }

    componentDidMount() {
        if (this.props.data) {
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
        if (this.props.data == null) return (<div>Cargando</div>)
        return (
            <canvas ref={this.canvasRef} />
        );
    }
}

export default Graficos;