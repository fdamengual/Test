import React, { Component } from "react";
import Chart from "chart.js"

class Graficos extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = ["casa", "Barco", "receta"];
        this.myChart.data.datasets[0].data = [200, 57, 100];
        this.myChart.update();
    }

    componentDidMount() {

        this.myChart = new Chart(this.canvasRef.current, {
            type: "pie",
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
                labels: ["casa", "Barco", "receta"],
                datasets: [{
                    label: "Marina",
                    data: [200, 57, 100],
                    backgroundColor: ["red", "blue", "orange"],
                }]
            }
        });
    }

    render() {
        return (
            <canvas ref={this.canvasRef} />
        );
    }
}

export default Graficos;