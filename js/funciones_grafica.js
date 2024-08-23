Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Graficas de Ventas y Popular'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Fisher Price',
                    sliced: true,
                    selected: true,
                    y: 55.02
                },
                {
                    name: 'Hasbro',
                    y: 26.71
                },
                {
                    name: 'Matel',
                    y: 1.09
                },
                {
                    name: 'Lego',
                    y: 15.5
                },
                {
                    name: 'Barbie',
                    y: 1.68
                }
            ]
        }
    ]
});
