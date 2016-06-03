/// <reference path="jquery.d.ts" />
;
var Constans = (function () {
    function Constans() {
    }
    Object.defineProperty(Constans, "STEP_HEADER_1", {
        get: function () { return "Operation"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constans, "STEP_HEADER_2", {
        get: function () { return "From"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constans, "STEP_HEADER_3", {
        get: function () { return "To"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constans, "STEP_HEADER_4", {
        get: function () { return "Mode of transport"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constans, "STEP_HEADER_5", {
        get: function () { return "Cost"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constans, "ID_ADD_STEP_EVENT_TRIGGER", {
        get: function () { return "addStep"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constans, "ID_MAIN_TABLE_CONTAINER", {
        get: function () { return "data"; },
        enumerable: true,
        configurable: true
    });
    return Constans;
})();
var HtmlHelper = (function () {
    function HtmlHelper(collection, label) {
        for (var i = 0; i < collection.length; i++) {
            this.createDataTableRow(collection[i], i);
        }
    }
    HtmlHelper.prototype.createDataTableRow = function (rData, label) {
        var panelGroup = $("<div></div>").addClass("panel-group");
        var panel = $("<div></div>").addClass("panel panel-default");
        var panelHeading = $("<div></div>").addClass("panel-heading");
        var panelCollapse = $("<div></div>").addClass("panel-collapse collapse");
        panelCollapse.attr('id', "collapse" + label);
        var table = $("<table></table>").addClass('table table-hover');
        var row = $("<tr></tr>");
        row.append($("<td><h4 class=\"panel-title\"><a data-toggle=\"collapse\" href= \"#collapse" + label + "\">#</a></h4></td>"));
        row.append($("<td></td>").text(rData.row.obj1 || ""));
        row.append($("<td></td>").text(rData.row.obj2 || ""));
        row.append($("<td></td>").text(rData.row.obj3 || ""));
        table.append(row);
        panelHeading.append(table);
        panel.append(panelHeading);
        var tableCollapse = $("<table></table>").addClass('table table-hover');
        tableCollapse.append($("<thead></thead>"));
        var tableCollapseHeader = this.createHeaderToggledSteps();
        $("thead", tableCollapse).append(tableCollapseHeader);
        for (var i = 0; i < rData.steps.length; i++) {
            var rowCollapse = $("<tr id=" + label + i.toString() + "></tr>");
            //rowCollapse.append($("<td width=\"50px\"><span class=\"" + Constans.ID_ADD_STEP_EVENT_TRIGGER + "\" onclick=\"HtmlHelper.inputRow('" + label + i.toString() + "')\">#</span></td>"));
            rowCollapse.append($("<td></td>").text(rData.steps[i].obj0 || ""));
            rowCollapse.append($("<td></td>").text(rData.steps[i].obj1 || ""));
            rowCollapse.append($("<td></td>").text(rData.steps[i].obj2 || ""));
            rowCollapse.append($("<td></td>").text(rData.steps[i].obj3 || ""));
            rowCollapse.append($("<td></td>").text(rData.steps[i].obj4 || ""));
            rowCollapse.append($("<td></td>").text(rData.steps[i].obj5 || ""));
            tableCollapse.append(rowCollapse);
        }
        panelCollapse.append(tableCollapse);
        panel.append(panelCollapse);
        panelGroup.append(panel);
        $("#" + Constans.ID_MAIN_TABLE_CONTAINER).append(panelGroup);
    };
    HtmlHelper.prototype.createHeaderToggledSteps = function () {
        var row = $("<tr></tr>");
        row.append($("<td></td>"));
        row.append($("<td></td>").text(Constans.STEP_HEADER_1));
        row.append($("<td></td>").text(Constans.STEP_HEADER_2));
        row.append($("<td></td>").text(Constans.STEP_HEADER_3));
        row.append($("<td></td>").text(Constans.STEP_HEADER_4));
        row.append($("<td></td>").text(Constans.STEP_HEADER_5));
        return row;
    };
    HtmlHelper.inputRow = function (id) {
        var nId = id + "n";
        var row = $("<tr id=\"" + nId + "\"></tr>");
        //row.append($("<td width=\"50px\"><span onclick=\"HtmlHelper.confirmInputed('" + nId + "')\">+</span></td>"));
        row.append($("<td width=\"50px\"></td>"));
        row.append($("<td><input type=\"text\" class=\"form- control\"></td>"));
        row.append($("<td><input type=\"text\" class=\"form- control\"></td>"));
        row.append($("<td><input type=\"text\" class=\"form- control\"></td>"));
        row.append($("<td><input type=\"text\" class=\"form- control\"></td>"));
        row.append($("<td><input type=\"text\" class=\"form- control\"></td>"));
        $('#' + id).after(row);
    };
    HtmlHelper.confirmInputed = function (id) {
        var dataInputs = $('#' + id).find('input');
        if (dataInputs.length > 0) {
            var nId = id + "i";
            var row = $("<tr id=\"" + nId + "\"></tr>");
            //row.append($("<td width=\"50px\"><span class=\"" + Constans.ID_ADD_STEP_EVENT_TRIGGER + "\" onclick=\"HtmlHelper.inputRow('" + nId + "')\">#</span></td>"));
            row.append($("<td></td>"));
            row.append($("<td>" + dataInputs[0].value + "</td>"));
            row.append($("<td>" + dataInputs[1].value + "</td>"));
            row.append($("<td>" + dataInputs[2].value + "</td>"));
            row.append($("<td>" + dataInputs[3].value + "</td>"));
            row.append($("<td>" + dataInputs[4].value + "</td>"));
            $('#' + id).after(row);
            $('#' + id).remove();
        }
    };
    return HtmlHelper;
})();
window.onload = function () {
    var data = {
        length: 4,
        0: {
            row: {
                obj1: "1",
                obj2: "7 days",
                obj3: "377$"
            },
            steps: {
                length: 3,
                0: {
                    obj0: "1",
                    obj1: "Warehouse",
                    obj2: "Tallinn 2016.01.01",
                    obj3: "Tallinn 2016.01.02",
                    obj4: "",
                    obj5: "12$"
                },
                1: {
                    obj0: "2",
                    obj1: "Transport",
                    obj2: "Tallinn 2016.01.02",
                    obj3: "Hamburg 2016.01.06",
                    obj4: "Sea",
                    obj5: "332$"
                },
                2: {
                    obj0: "3",
                    obj1: "Warehouse",
                    obj2: "Hamburg 2016.01.06",
                    obj3: "Hamburg 2016.01.07",
                    obj4: "",
                    obj5: "33$"
                }
            }
        },
        1: {
            row: {
                obj1: "2",
                obj2: "6 days",
                obj3: "710$"
            },
            steps: {
                length: 3,
                0: {
                    obj0: "1",
                    obj1: "Warehouse",
                    obj2: "Tallinn 2016.01.01",
                    obj3: "Tallinn 2016.01.02",
                    obj4: "",
                    obj5: "10$"
                },
                1: {
                    obj0: "2",
                    obj1: "Transport",
                    obj2: "Tallinn 2016.01.02",
                    obj3: "Gdansk 2016.01.04",
                    obj4: "Sea",
                    obj5: "300$"
                },
                2: {
                    obj0: "3",
                    obj1: "Transport",
                    obj2: "Gdansk 2016.01.04",
                    obj3: "Hamburg 2016.01.06",
                    obj4: "Sea",
                    obj5: "300$"
                }
            }
        },
        2: {
            row: {
                obj1: "3",
                obj2: "18 days",
                obj3: "400$"
            },
            steps: {
                length: 3,
                0: {
                    obj0: "1",
                    obj1: "Transport",
                    obj2: "Tallinn 2016.01.01",
                    obj3: "Riga 2016.01.01",
                    obj4: "Air",
                    obj5: "100$"
                },
                1: {
                    obj0: "2",
                    obj1: "Transport",
                    obj2: "Riga 2016.01.01",
                    obj3: "Gdansk 2016.01.14",
                    obj4: "Sea",
                    obj5: "200$"
                },
                2: {
                    obj0: "3",
                    obj1: "Transport",
                    obj2: "Gdansk 2016.01.14",
                    obj3: "Hamburg 2016.01.18",
                    obj4: "Sea",
                    obj5: "100$"
                }
            }
        },
        3: {
            row: {
                obj1: "4",
                obj2: "5 days",
                obj3: "800$"
            },
            steps: {
                length: 4,
                0: {
                    obj0: "1",
                    obj1: "Transport",
                    obj2: "Tallinn 2016.01.01",
                    obj3: "Riga 2016.01.01",
                    obj4: "Air",
                    obj5: "100$"
                },
                1: {
                    obj0: "2",
                    obj1: "Transport",
                    obj2: "Riga 2016.01.01",
                    obj3: "Warsaw 2016.01.03",
                    obj4: "Air",
                    obj5: "300$"
                },
                2: {
                    obj0: "3",
                    obj1: "Transport",
                    obj2: "Warsaw 2016.01.03",
                    obj3: "Berlin 2016.01.04",
                    obj4: "Road",
                    obj5: "300$"
                },
                3: {
                    obj0: "4",
                    obj1: "Transport",
                    obj2: "Berlin 2016.01.04",
                    obj3: "Hamburg 2016.01.05",
                    obj4: "Road",
                    obj5: "100$"
                }
            }
        }
    };
    var htmlHelper = new HtmlHelper(data, "4");
};
//# sourceMappingURL=rowDetail.js.map