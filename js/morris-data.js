$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2014 Q1',
            freight: 2666,
            sea: null,
            overland: 2647
        }, {
            period: '2014 Q2',
            freight: 2778,
            sea: 2294,
            overland: 2441
        }, {
            period: '2014 Q3',
            freight: 4912,
            sea: 1969,
            overland: 2501
        }, {
            period: '2014 Q4',
            freight: 3767,
            sea: 3597,
            overland: 5689
        }, {
            period: '2015 Q1',
            freight: 6810,
            sea: 1914,
            overland: 2293
        }, {
            period: '2015 Q2',
            freight: 5670,
            sea: 4293,
            overland: 1881
        }, {
            period: '2015 Q3',
            freight: 4820,
            sea: 3795,
            overland: 1588
        }, {
            period: '2015 Q4',
            freight: 15073,
            sea: 5967,
            overland: 5175
        }, {
            period: '2016 Q1',
            freight: 10687,
            sea: 4460,
            overland: 2028
        }, {
            period: '2016 Q2',
            freight: 8432,
            sea: 5713,
            overland: 1791
        }],
        xkey: 'period',
        ykeys: ['freight', 'sea', 'overland'],
        labels: ['Freight', 'Sea', 'Overland'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Overland Sales",
            value: 12
        }, {
            label: "Sea Sales",
            value: 30
        }, {
            label: "Freight Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2010',
            a: 100,
            b: 90
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 50,
            b: 40
        }, {
            y: '2013',
            a: 75,
            b: 65
        }, {
            y: '2014',
            a: 50,
            b: 40
        }, {
            y: '2015',
            a: 75,
            b: 65
        }, {
            y: '2016',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Inbound', 'Outbound'],
        hideHover: 'auto',
        resize: true
    });
    
});
