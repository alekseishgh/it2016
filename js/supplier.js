/**
 * Created by anna.kulikova on 2.06.2016.
 */
data= [[{data:[

    [
        "TNixon01",
        "Tallinn Hub",
        "04 June 2016",
        "Edinburgh KN Xdock",
        "12 Aug 2016",
        "800 packs",
        "50",
        "0"
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
            "77",
            "0"
        ],
        [
            "TNyyyon01",
            "Tallinn Hub",
            "16 June 2016",
            "Edinburgh KN Xdock",
            "12 Aug 2016",
            "800 packs",
            "757",
            "0"
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
            "3o pallets",
            "797",
            "0"
        ],
        [
            "TNn099991",
            "Jagala Hub",
            "17 June 2016",
            "NY KN Xdock",
            "12 Aug 2016",
            "10 boxes",
            "17",
            "0"
        ],
        [
            "Ginters555",
            "Narva Hub",
            "17 June 2016",
            "Helsinki KN Xdock",
            "11 Aug 2016",
            "30 packs",
            "227",
            "0"
        ]
    ]
    },{data:[ [
        "Gters555",
        "Tokyo",
        "17 June 2016",
        "London KN Xdock",
        "11 Aug 2016",
        "3 pallets",
        "7523",
        "7723"
    ]]}],
    [{data:[
        [
            "Ga5rf2",
            "Tallinn Hub",
            "19 June 2016",
            "Narva KN Xdock",
            "01 Aug 2016",
            "110 boxes",
            "97",
            "0"
        ],
        [
            "T8u9991",
            "Jagala Hub",
            "19 June 2016",
            "NY KN Xdock",
            "12 Aug 2016",
            "800 bags",
            "177",
            "0"
        ],
        [
            "G45ers155",
            "Narva Hub",
            "19 June 2016",
            "Helsinki KN Xdock",
            "11 Aug 2016",
            "30 pallets",
            "277",
            "0"
        ],
        [
            "Gi33ers555",
            "Tallinn Hub",
            "19 June 2016",
            "Helsinki KN Xdock",
            "11 Aug 2016",
            "9 pallets",
            "377",
            "0"
        ]
    ]
    },{data:[]}]

];
var lostData = {data:[
    [
        "LOST1",
        "Tallinn Hub",
        "09 June 2016",
        "London KN Xdock",
        "01 Aug 2016",
        "110 boxes",
        "97",
        "134"
    ],
    [
        "LOST2",
        "JagalaHUUB",
        "13 June 2016",
        "London KN Xdock",
        "12 Aug 2016",
        "800 bags",
        "177",
        "777"
    ]
]
};
var wonData = {data:[
    [
        "WON444",
        "Tallinn Hub",
        "19 June 2016",
        "Moscow KN Xdock",
        "01 Aug 2016",
        "110 boxes",
        "100",
        "100"
    ]
]
};

var showAll = true;
var showEnding = false;
var showWon = false,showLost = false;

var chartData = [{
    y: '04 June 2016',
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

function showModal(id, pickup, pdate, delivery, ddate, qty) {
    $('#mdOrderNum').text(id);
    $('#pickLoc').text(pickup);
    $('#pickDate').text(pdate);
    $('#delLoc').text(delivery);
    $('#delDate').text(ddate);
    $('#mdQty').text(qty);
    if (!showLost && !showWon) {
        $("#getting-started").countdown(Date.parse(pdate), function (event) {
            $(this).text(event.strftime('%D days %H:%M:%S'));
        });
        $('#mdStatus').text('');
    } else {
        $("#getting-started").countdown(new Date(), function (event) {
            $(this).text(event.strftime('%D days %H:%M:%S'));
        });
        if (showLost) {
            $('#mdStatus').text('You lost');
        } else  {
            $('#mdStatus').text('You won');
        }
    }

}

function changea(index) {
    showAll = false;
    showEnding = false;
    showWon = false;showLost = false;
    curY = 0;
    currIndex = index;
    table.ajax.reload().draw();
}
function changeb(index) {
    showAll = false;
    showEnding = false;
    showWon = false;showLost = false;
    curY = 1;
    currIndex = index;
    table.ajax.reload().draw();
}

function showAllAvailable() {
    showAll = true;
    showEnding = false;
    showWon = false;showLost = false;
    window.location.hash='jumpHere';
    table.ajax.reload().draw();
}

function showAllA() {
    curY = 0;
    var result = {data:[]};
    data.forEach(function(elem, index) {
            elem[0].data.forEach(function (elm) {
                result.data.push(elm);
            });
    });

    setAllAv(result.data.length);
    return result;
}

function ending() {
    showAll = false;
    showEnding = true;
    showWon = false;showLost = false;
    showEnd();
    window.location.hash='jumpHere';
    table.ajax.reload().draw();
}

function winning() {
    showAll = false;
    showEnding = false;
    showWon = true;showLost = false;
    window.location.hash='jumpHere';
    table.ajax.reload().draw();
}

function loosing() {
    showAll = false;
    showEnding = false;
    showWon = false;showLost = true;
    window.location.hash='jumpHere';
    table.ajax.reload().draw();
}

function showEnd() {
    curY = 0;
    currIndex = 4;
    var result = {data:[]};
    data.forEach(function(elem, index) {
        elem[1].data.forEach(function (elm) {
            result.data.push(elm);
        });
    });
    setAllEnd(result.data.length);
    return result;
}
showEnd();

var all = 0;
function setAllAv(f) {
    all = f;
    $('#allAv').text(f);
}
var end = 0;
function setAllEnd(f) {
    end = f;
    $('#allEnd').text(f);
}

function getData() {
    return showAll? showAllA() : showEnding? showEnd() : showWon? wonData : showLost? lostData : data[currIndex][curY];
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
                 callback(getData()
                 );
             },

            "columnDefs": [
                {
                    "targets": 0,
                    "data": null,
                    "render": function ( data, type, full, meta ) {
                        return  '<button class="modalBtn btn btn-link btn-sm" data-toggle="modal" ' +
                            'data-target="#myModal" type="button" ' +
                            'onclick="showModal(\''+full[0]+'\', \''+full[1]+'\', \''+full[2]+'\',\''+full[3]+'\',\''+full[4]+'\',\''+full[5]+'\')">' +
                            '<i class="fa fa-search"></i>' +
                            '  </button> '   + full[0];

                    }
                },
                {
                    "targets": 6,
                    "data": null,
                    orderable: false,
                    "render": function ( data, type, full, meta ) {
                        return   !(showLost || showWon) ?
                            '<span class="text-warning">'+
                            (parseInt(full[7]) != 0 ? parseInt(full[6]) > parseInt(full[7]) ?
                                'You are the first' : Math.round(4 + parseInt(full[6]) * (parseInt(full[7]) - parseInt(full[6]))/100):'NO')
                            +'</span>'
                            : showLost ? '<span class="text-danger">Lost auction</span>' : showWon ? '<span class="success">You won</span>' : '';

                    }
                },
                {
                "targets": -1,
                "data": null,
                orderable: false,
                "render": function ( data, type, full, meta ) {
                    return   !(showLost || showWon) ?
                    '<div class="form-group input-group"> ' +
                    '<input class="form-control input-sm" type="number" id="inp' + full[0] + '">' +
                    '<span class="input-group-btn">' +
                    '<button class="bid btn btn-default btn-sm" type="button"><i class="fa fa-check"></i>' +
                    '                        </button>' +
                    '                        </span></div>'
                        : '<span class="text-success">Finished</span>';

                }
            }]
        } );

        //$('#example').on( 'click', 'button.modalBtn', function () {
        //
        //});

        $('#example').on( 'click', 'button.bid', function () {
            var data22 = table.row( $(this).parents('tr') ).data();
            var inpt_value = $('#inp'+data22[0]).val();
            if (inpt_value != '') {
                data22[7] = inpt_value;

                if (curY < 1) {
                    if (!showAll && !showEnding) {
                        var idd = data[currIndex][0].data.indexOf(data22);
                        data[currIndex][0].data.splice(idd, 1);
                        data[currIndex][1].data.push(data22);
                        //curY = 1;
                        chartData[currIndex].a = data[currIndex][0].data.length;
                        chartData[currIndex].b = data[currIndex][1].data.length;
                        //chart.draw();
                        chart.setData(chartData);
                    } else {
                        data.forEach(function(elem, index) {
                                elem[0].data.forEach(function (elm, i) {
                                    if (elm[0] == data22[0]) {
                                        data[index][0].data.splice(i, 1);
                                        data[index][1].data.push(data22);
                                        //curY = 1;
                                        chartData[index].a = data[index][0].data.length;
                                        chartData[index].b = data[index][1].data.length;
                                        chart.setData(chartData);
                                    }
                                });
                        });
                        if (showAll) setAllAv(all == 0 ? 0 : all-1);
                        showEnd();
                    }
                }
                table.ajax.reload().draw();
            }
        } );
    } );

});
