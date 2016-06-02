/**
 * Created by anna.kulikova on 2.06.2016.
 */
data= [[{data:[

    [
        "TNixon01",
        "Tallinn Hub",
        "12 June 2016",
        "Edinburgh KN Xdock",
        "12 Aug 2016",
        "800 packs",
        "50 eur",
        "0",
        "TNixon01"
    ]

]},{data:[]}],
    [{data:[
        [
            "Garr87gs222",
            "Tallinn Hub",
            "16 June 2016",
            "Narva KN Xdock",
            "01 Aug 2016",
            "30 bags",
            "77 eur",
            "0",
            "Garr87gs222"
        ],
        [
            "TNyyyon01",
            "Tallinn Hub",
            "16 June 2016",
            "Edinburgh KN Xdock",
            "12 Aug 2016",
            "800 packs",
            "757 eur",
            "0",
            "TNyyyon01"
        ]
    ]
},{data:[]}],
    [{data:[
        [
            "Garret22",
            "Tallinn Hub",
            "17 June 2016",
            "Narva KN Xdock",
            "01 Aug 2016",
            "3 euro pallets",
            "797 eur",
            "0",
            "Garret22"
        ],
        [
            "TNn099991",
            "Jagala Hub",
            "17 June 2016",
            "NY KN Xdock",
            "12 Aug 2016",
            "10 boxes",
            "17 eur",
            "0",
            "TNn099991"
        ],
        [
            "Ginters555",
            "Narva Hub",
            "17 June 2016",
            "Helsinki KN Xdock",
            "11 Aug 2016",
            "30 packs",
            "227 eur",
            "0",
            "Ginters555"
        ]
    ]
    },{data:[ [
        "Gters555",
        "Tokyo",
        "17 June 2016",
        "London KN Xdock",
        "11 Aug 2016",
        "3 pallets",
        "7523 eur",
        "7723 eur",
        "Gters555"
    ]]}],
    [{data:[
        [
            "Ga5rf2",
            "Tallinn Hub",
            "19 June 2016",
            "Narva KN Xdock",
            "01 Aug 2016",
            "110 boxes",
            "97 eur",
            "0",
            "Ga5rf2"
        ],
        [
            "T8u9991",
            "Jagala Hub",
            "19 June 2016",
            "NY KN Xdock",
            "12 Aug 2016",
            "800 bags",
            "177 eur",
            "0",
            "T8u9991"
        ],
        [
            "G45ers155",
            "Narva Hub",
            "19 June 2016",
            "Helsinki KN Xdock",
            "11 Aug 2016",
            "30 pallets",
            "277 eur",
            "0",
            "G45ers155"
        ],
        [
            "Gi33ers555",
            "Tallinn Hub",
            "19 June 2016",
            "Helsinki KN Xdock",
            "11 Aug 2016",
            "9 pallets",
            "377 eur",
            "0",
            "Gi33ers555"
        ]
    ]
    },{data:[]}]
, [{data:[[
        "TNixon01",
        "Tallinn Hub",
        "12 June 2016",
        "Edinburgh KN Xdock",
        "12 Aug 2016",
        "800 packs",
        "50 eur",
        "0",
        "TNixon01"
    ],
        [
            "Garr87gs222",
            "Tallinn Hub",
            "16 June 2016",
            "Narva KN Xdock",
            "01 Aug 2016",
            "30 bags",
            "77 eur",
            "0",
            "Garr87gs222"
        ],
        [
            "TNyyyon01",
            "Tallinn Hub",
            "16 June 2016",
            "Edinburgh KN Xdock",
            "12 Aug 2016",
            "800 packs",
            "757 eur",
            "0",
            "TNyyyon01"
        ],
        [
            "Garret22",
            "Tallinn Hub",
            "17 June 2016",
            "Narva KN Xdock",
            "01 Aug 2016",
            "3 euro pallets",
            "797 eur",
            "0",
            "Garret22"
        ],
        [
            "TNn099991",
            "Jagala Hub",
            "17 June 2016",
            "NY KN Xdock",
            "12 Aug 2016",
            "10 boxes",
            "17 eur",
            "0",
            "TNn099991"
        ],
        [
            "Ginters555",
            "Narva Hub",
            "17 June 2016",
            "Helsinki KN Xdock",
            "11 Aug 2016",
            "30 packs",
            "227 eur",
            "0",
            "Ginters555"
        ],
        [
            "Ga5rf2",
            "Tallinn Hub",
            "19 June 2016",
            "Narva KN Xdock",
            "01 Aug 2016",
            "110 boxes",
            "97 eur",
            "0",
            "Ga5rf2"
        ],
        [
            "T8u9991",
            "Jagala Hub",
            "19 June 2016",
            "NY KN Xdock",
            "12 Aug 2016",
            "800 bags",
            "177 eur",
            "0",
            "T8u9991"
        ],
        [
            "G45ers155",
            "Narva Hub",
            "19 June 2016",
            "Helsinki KN Xdock",
            "11 Aug 2016",
            "30 pallets",
            "277 eur",
            "0",
            "G45ers155"
        ],
        [
            "Gi33ers555",
            "Tallinn Hub",
            "19 June 2016",
            "Helsinki KN Xdock",
            "11 Aug 2016",
            "9 pallets",
            "377 eur",
            "0",
            "Gi33ers555"
        ]]}]
];
var chartData = [{
    y: '12 June 2016',
    a: 1
}, {
    y: '16 June 2016',
    a: 2
}, {
    y: '17 June 2016',
    a: 3,
    b: 1
}, {
    y: '19 June 2016',
    a: 4
}];
var table = {};
var currIndex = 4, curY = 0;

function changea(index) {
    curY = 0;
    currIndex = index;
    table.ajax.reload().draw();
}
function changeb(index) {
    curY = 1;
    currIndex = index;
    table.ajax.reload().draw();
}


$(function() {

    var chart = Morris.Bar({
        element: 'morris-bar-chart',
        data: chartData,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Available bids', 'Your bids'],
        hideHover: 'auto',
        resize: true,
        hoverCallback: function(index, options, content) {
            var s =  options.data[index].b ? ('<a href="javascript:changeb('+ index +')"> Check out your bids: '+ options.data[index].b + '</a> <br>') : '';
            var s1 =  options.data[index].a ? ('<a href="javascript:changea('+ index +')"> Bid for available orders: '+ options.data[index].a + '</a> ') : '';

            return(s + s1);
        }
    });

    $(document).ready(function() {
         table = $('#example').DataTable( {
             ajax: function (data1, callback, settings) {
                 callback(data[currIndex][curY]
                 );
             },

            "columnDefs": [{
                "targets": -2,
                "data": null,
                orderable: false,
                "render": function ( data, type, full, meta ) {
                    return   "<input class='form-control input-sm' type='number' id='inp"+full[0]+"'>"
                }
            },
                {
                    "targets": -1,
                    "data": null,
                    orderable: false,
                    "defaultContent": "<button class='btn btn-default btn-sm'>Submit your bid</button>"
                }]
        } );


        $('#example').on( 'click', 'button', function () {
            var data22 = table.row( $(this).parents('tr') ).data();
            var inpt_value = $('#inp'+data22[0]).val();
            if (inpt_value != '') {
                data22[7] = inpt_value;

                if (curY < 1) {
                    var idd = data[currIndex][0].data.indexOf(data22);
                    var cc = data[currIndex][0].data.splice(idd,1);
                    data[currIndex][1].data.push(data22);
                    //curY = 1;
                    chartData[currIndex].a = data[currIndex][0].data.length;
                    chartData[currIndex].b = data[currIndex][1].data.length;
                    //chart.setData(chartData);
                }
                table.ajax.reload().draw();
            }
        } );
    } );

});
