$(function () {
    // Grafico de linea
    var ctx = document.getElementById("canvas1").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [{
                label: 'La linea',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0,
                pointRadius: 15,
                pointHoverRadius: 10,
                pointHitRadius: 30,
                pointBorderWidth: 2, pointStyle: 'rectRounded'
            },
            {
                label: 'La linea2',
                data: [10, 90, 45, 80, 56, 30, 63],
                fill: false,
                borderColor: 'rgb(75, 100, 192)',
                tension: 0,
                pointRadius: 15,
                pointHoverRadius: 10,
                pointHitRadius: 30,
                pointBorderWidth: 2, pointStyle: 'rectRounded'
            }
            ]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 25
                        }
                    }
                }
            }
        }
    });

    // Graficos cuadrado 2
    var ctx = document.getElementById("canvas2").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Eating',
                'Drinking',
                'Sleeping',
                'Designing',
                'Coding',
                'Cycling',
                'Running'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'My Second Dataset',
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }
    });

    // Graficos cuadrado 3
    var ctx = document.getElementById("canvas3").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Chocolate", "Leche", "Azucar", "Bicarbonato",],
            datasets: [{
                label: 'Grafico torta',
                backgroundColor: [
                    "rgba(0, 150, 254, 0.5)",
                    "rgba(150, 100, 50, 0.5)",
                    "rgba(50, 50, 50, 0.5)",
                    "rgba(255, 100, 0, 0.5)",
                    "rgba(150, 100, 50, 0.5)",
                    "rgba(100, 254, 0.5)",
                    "rgba(25, 100, 200, 0.5)",
                    "rgba(75, 75, 75, 0.5)",
                    "rgba(80, 20, 0, 0.5)",
                    "rgba(255, 50, 254, 0.5)"
                ],
                data: [50, 23, 27, 30],
            }]
        },
        options: {
            legend: {
                // position: 'right'
            },
            scale: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 50
                    }
                }],
                xAxes: [{
                    ticks: {
                        //beginAtZero: true,
                        fontSize: 20
                    }
                }],
            }
        }
    });
    // Graficos cuadrado 4
    var ctx = document.getElementById("canvas4").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Comer',
                'Beber',
                'Dormir',
                'Diseñar',
                'Codificar',
                'Ciclar',
                'Correr'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [15, 32, 50, 23, 75, 50, 40],
                fill: true,
                backgroundColor: 'rgba(125, 40, 90, 0.7)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'My Second Dataset',
                data: [50, 48, 40, 75, 60, 50, 70],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    suggestedMin: 50,
                    suggestedMax: 80
                }
            }
        }
    });

    var ctx = document.getElementById("canvas5").getContext('2d');
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [{
                label: 'La linea',
                data: [65, 59, 80, 81, 56, 55, 40],

                borderColor: 'rgb(75, 192, 192)',
                tension: 0,
                pointRadius: 8,
                pointHoverRadius: 10,
                pointHitRadius: 15,
                pointBorderWidth: 2, pointStyle: 'rectRounded'
            },
            {
                label: 'La linea2',
                data: [10, 90, 45, 80, 56, 30, 63],
                fill: false,
                borderColor: 'rgb(75, 100, 192)',
                tension: 0,
                pointRadius: 8,
                pointHoverRadius: 10,
                pointHitRadius: 15,
                pointBorderWidth: 2, pointStyle: 'rectRounded'
            }
            ]
        },
        options: {
            plugins: {
                legend: {
                    labels: {

                        font: {
                            size: 15
                        }
                    }
                }
            }
        }
    });


    var ctx = document.getElementById("canvas7").getContext('2d');
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [
                {
                    label: 'Type Line',
                    data: [-100, 100, 8, 2, 1, -60, 30],
                    borderColor: 'blue',
                    backgroundColor: 'blue',
                    fill: true
                }
            ]

        },
        options: {
            plugins: {
                filler: {
                    propagate: false,
                },
                title: {
                    display: true,
                    text: "Linea azul"
                }
            },
            interaction: {
                intersect: false,
            }
        },


    });


    // Graficos cuadrado 6
    var ctx = document.getElementById("canvas8").getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [
                {
                    label: 'My First dataset',
                    data: [31, 58, 62, 95, 34, -54],
                    borderColor: 'red',
                    backgroundColor: "red",
                    fill: true
                },
                {
                    label: 'My Second dataset',
                    data: [-23, 41, -54, 32, 16, 40],
                    borderColor: 'blue',
                    backgroundColor: 'blue',
                    fill: true
                },
                {
                    label: 'My Third dataset',
                    data: [54, 61, -43, -16, 23, 40],
                    borderColor: "green",
                    backgroundColor: "green",
                    fill: true
                }],
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
        }
    });

    var ctx = document.getElementById("canvas9").getContext('2d');
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'
            ],
            datasets: [{
                label: 'Dataset 1',
                data: [10, 50, 85, 92, 64, 54],
                borderColor: 'rgb(15, 50, 254)',
                backgroundColor: ' rgb(191, 97, 198,0.5)',
            },
            {
                label: 'Dataset 2',
                data: [-15, -50, -35, -32, -26, 54],
                borderColor: 'rgb(54, 162, 50)',
                backgroundColor: 'rgb(56, 53, 73,0.7)',
            }]

        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                }
            }
        },

    });

    // Graficos cuadrado 7
    var ctx = document.getElementById("canvas10").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [
                {
                    label: 'My First dataset',
                    data: [31, 58, 62, 95, 34, -54],
                    borderColor: 'rgb(191, 97, 198,0.5)',
                    backgroundColor: 'rgb(191, 97, 198,0.5)',
                    fill: true
                },
                {
                    label: 'My Second dataset',
                    data: [-23, 10, 25, 90, -16, 42],
                    borderColor: 'rgb(206, 15, 243,0,5)',
                    backgroundColor: 'rgb(206, 15, 243,0,5)',
                    fill: true
                },
                {
                    label: 'My Third dataset',
                    data: [54, 61, -43, -16, 23, 40],
                    borderColor: "rgb(71, 227, 77,0.3)",
                    backgroundColor: "green",
                    fill: true
                }],
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
        }
    });

    var ctx = document.getElementById("canvas11").getContext('2d');
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'
            ],
            datasets: [{
                label: 'Dataset 1',
                data: [10, 50, 85, 92, 64, 54],
                borderColor: 'rgb(15, 50, 254)',
                backgroundColor: ' rgb(191, 97, 198,0.5)',
            },
            {
                label: 'Dataset 2',
                data: [-15, -50, -35, -32, -26, 54],
                borderColor: 'rgb(54, 162, 50)',
                backgroundColor: 'rgb(56, 53, 73,0.7)',
            }]

        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                }
            }
        },

    });
})