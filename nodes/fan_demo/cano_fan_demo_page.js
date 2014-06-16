FAN_DEVICE_ID = "d59e4703-ed10-11e3-a241-74d02b36a289";

function CanoFanDemoPageNode(canopy, dispatcher) {
    var $me,
        topbarNode,
        $content,
        chart1,
        chart2,
        optionNode,
        $topp,
        $bottom
    ;

    $.extend(this, new CanoNode());

    this.get$ = function() {
        return $me;
    }

    this.onLive = function() {
        topbarNode.onLive();
        optionNode.onLive();
        $("#offbtn").off('click').on('click', function() {
            canopy.setControlValue(FAN_DEVICE_ID, "speed", 0, 
                function() {}, 
                function() {
                    alert("Failed to set fan speed!");
                }
            );
        });
        $("#onbtn").off('click').on('click', function() {
            canopy.setControlValue(FAN_DEVICE_ID, "speed", 1, 
                function() {}, 
                function() {
                    alert("Failed to set fan speed!");
                }
            );
        });
        canopy.fetchSensorData(FAN_DEVICE_ID, "temperature", function(data) {
            chart1.setTimeseriesData(data.samples);
        })
        canopy.fetchSensorData(FAN_DEVICE_ID, "humidity", function(data) {
            chart2.setTimeseriesData(data.samples);
        })
    }

    optionNode = new CanoOptionNode({
        normalClass: "bigbtn",
        selectedClass: "bigbtn_selected",
        items: [ {
            html: "OFF",
            value: 0
        }, {
            html: "SLOW",
            value: 1
        }, {
            html: "MEDIUM",
            value: 2
        }, {
            html: "FAST",
            value: 3
        } ],
        onSelect: function(idx, item) {
            canopy.setControlValue(FAN_DEVICE_ID, "speed", item.value, 
                function() {}, 
                function() {
                    alert("Failed to set fan speed!");
                }
            );
        }
    });

    $content = $("<div class=center_channel></div>");
    $btnOuter = $("<div style='position:relative'></div>").appendTo($content);
    $chartOuter = $("<div style='position:relative'></div>").appendTo($content);
    $btnInner = $("<div style='position:absolute; display:inline-block; left:350px; top:465px'></div>").appendTo($btnOuter);
    $("<img height=600 src=http://www.canopy.link/shutterstock_82034455_fan.jpg></img>").appendTo($content);
    optionNode.appendTo($btnInner);

    $topp = $("<div style='position:absolute; top:120px; left:330px; width:630px;'></div>");
    $bottom = $("<div style='position:absolute; top:300px; left:330px; width:630px;'></div>");
    $chartOuter.append($topp);
    $chartOuter.append($bottom);

    chart1 = new CanoPlotNode({title: "Temperature", vAxisFormat: "#˚F"}).appendTo($topp);
    chart2 = new CanoPlotNode({title: "Humidity", vAxisFormat: '#%'}).appendTo($bottom);
    $temp = $("<div class=sensor_box style='position:absolute; top:80px; left:730px'><div class=xxl>45&deg;F</div>Temperature</div>").appendTo($chartOuter);
    $hum = $("<div class=sensor_box style='position:absolute; top:270px; left:730px'><div class=xxl>52%</div>Humidity</div>").appendTo($chartOuter);
    /*$content = $("\
        <div class=center_channel>\
            <div style='position:relative;'>\
                <div style='position:absolute; display:inline-block; left:400px; top:100px;'>\
                    <div id=offbtn class=bigbtn>OFF</div>\
                    <div id=onbtn class=bigbtn>SLOW</div>\
                    <div id=onbtn class=bigbtn>MEDIUM</div>\
                    <div id=onbtn class=bigbtn>FAST</div>\
                </div>\
            </div>\
            <img height=600 src=http://www.canopy.link/shutterstock_82034455_fan.jpg></img>\
        </div>
    ");*/

    $me = $("<div style'width:100%;'>");

    topbarNode = new CanoTopbarNode(canopy, dispatcher).appendTo($me);
    $me.append($content)
}

