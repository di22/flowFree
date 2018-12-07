var gridCells = [];
var color;
var isFirstClick = true;

//Level 1 Array
var cellClicked = [
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#d43f3a", borderColor: "#942c28" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "#942c28" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#d43f3a", borderColor: "#942c28" },

    { isClickedFlag: 0, hasCircle: 1, circleColor: "#43A047", borderColor: "#2e7031" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#1976D2", borderColor: "#115293" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "#942c28" },

    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "#942c28" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#43A047", borderColor: "#2e7031" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#1976D2", borderColor: "#115293" }
];

//Level 2 Array
var level2 = [
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#d43f3a", borderColor: "#942c28" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#43A047", borderColor: "#2e7031" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#eeec33", borderColor: "#a6a523" },

    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#1976D2", borderColor: "#115293" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#fd7f23", borderColor: "#b15818" },

    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },

    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#43A047", borderColor: "#2e7031" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#eeec33", borderColor: "#a6a523" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },

    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#d43f3a", borderColor: "#942c28" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#1976D2", borderColor: "#115293" },
    { isClickedFlag: 0, hasCircle: 1, circleColor: "#fd7f23", borderColor: "#b15818" },
    { isClickedFlag: 0, hasCircle: 0, circleColor: "", borderColor: "" }
];

gridCells = document.getElementsByClassName("cell");

//jquery Code - Code to be executed when the page is ready
$(document).ready(function () {

    //To draw the grid
    //To draw grid rows
    var size = Math.sqrt(cellClicked.length);
    for (var i = 0; i < size; i++) {
        $("#grid-div").append("<div class='row' />");
    }

    //To draw the number of cells
    var rows = document.querySelectorAll('.row');
    for (var j = 0; j < size; j++) {
        var row = rows[j];
        //To add cells to the row
        for (var k = 0; k < size; k++) {
            var cell_ID = k + "" + j + "";
            $(row).append("<div class='cell' id=" + cell_ID + " />");

            var cellDimensions = 100 / size;
            $("#" + cell_ID).css("width", cellDimensions + "%");
            $("#" + cell_ID).css("height", cellDimensions + "%");
            $("#" + cell_ID).css({ "border-radius": "8px", "margin": "2px" });
        }
    }

    //To add circles to the cells
    var flowFreeCells = document.querySelectorAll('.cell');
    for (var l = 0; l < cellClicked.length; l++) {
        if (cellClicked[l].hasCircle == 1) {
            //To give the circle backgroudColor and borderColor
            var circle = '<div class="circle" style="border: 3px solid '
                + cellClicked[l].borderColor + ';  background-color:' + cellClicked[l].circleColor + '"></div>';
            $(flowFreeCells[l]).append(circle);
        }
    }

    $(".cell").click(function (event) {

        //To get the color of the current cell
        cellColorValue = $(this).children(".circle").css("background-color");

        if (isFirstClick) {
            if (typeof cellColorValue !== "undefined") {
                color = cellColorValue;
                isFirstClick = false;
            }
        } else {
            if (typeof cellColorValue !== "undefined" && cellColorValue == color) {
                color = cellColorValue;
            }
        }

        switch (parseInt(event.target.id)) {

            case 00: cellClicked[0].isClickedFlag = 1;
                break;
            case 10: cellClicked[1].isClickedFlag = 1;
                break;
            case 20: cellClicked[2].isClickedFlag = 1
                break;
            case 01: cellClicked[3].isClickedFlag = 1;
                break;
            case 11: cellClicked[4].isClickedFlag = 1
                break;
            case 21: cellClicked[5].isClickedFlag = 1;
                break;
            case 02: cellClicked[6].isClickedFlag = 1;
                break;
            case 12: cellClicked[7].isClickedFlag = 1;
                break;
            case 22: cellClicked[8].isClickedFlag = 1;
                break;
        }

        for (var i = 0; i < cellClicked.length; i++) {
            if (i < cellClicked.length - 1 && cellClicked[i].isClickedFlag && cellClicked[i + 1].isClickedFlag) {
                if (parseInt(gridCells[i + 1].id[0]) > parseInt(gridCells[i].id[0])
                    && (cellColorValue == color || typeof cellColorValue === "undefined")) {
                    drawLineConnector("right", "left", i, i + 1);
                } else {
                    cellClicked[i].isClickedFlag = 0;
                    cellClicked[i + 1].isClickedFlag = 0;
                }
            }

            //The first condition to check for the latest row to ensure that it is in the correct range
            if (i < cellClicked.length - size && cellClicked[i].isClickedFlag
                && cellClicked[i + size].isClickedFlag) {
                if (parseInt(gridCells[i + size].id[1]) > parseInt(gridCells[i].id[1]) && (cellColorValue == color || typeof cellColorValue === "undefined")) {
                    drawLineConnector("down", "up", i, i + size);
                } else {
                    cellClicked[i].isClickedFlag = 0;
                    cellClicked[i + size].isClickedFlag = 0;
                }
            }
        }

    });

    function drawLineConnector(lineConnectorClassName1, lineConnectorClassName2, cellNumber1, cellNumber2) {

        var line1 = document.createElement("div");
        var line2 = document.createElement("div");

        line1.setAttribute("class", "line-connector-" + lineConnectorClassName1);
        line2.setAttribute("class", "line-connector-" + lineConnectorClassName2);

        line1.style.backgroundColor = color;
        line2.style.backgroundColor = color;

        gridCells[cellNumber1].appendChild(line1);
        gridCells[cellNumber2].appendChild(line2);

        cellClicked[cellNumber1].isClickedFlag = 0;
        cellClicked[cellNumber2].isClickedFlag = 0;
    };

});