function CanoMainPageNode(canopy, dispatcher) {
    var $me,
        topbarNode;

    $.extend(this, new CanoNode());

    this.get$ = function() {
        return $me;
    }

    this.onLive = function() {
        topbarNode.render($("#topbar"));
        deviceEventsNode.render($("#main_right_side"));
        devicesNode.render($("#main_sidebar"));
        deviceControlsNode.render($("#main_top_center"));
        deviceSensorsNode.render($("#main_bottom_center"));
    }

    topbarNode = new CanoTopbarNode(canopy, dispatcher);
    devicesNode = new CanoDevicesDialogNode({
        canopyClient: canopy,
    });
    deviceControlsNode = new CanoDeviceControlsDialogNode({canopyClient: canopy});
    deviceSensorsNode = new CanoDeviceSensorsDialogNode({canopyClient: canopy});
    deviceEventsNode = new CanoDeviceEventsDialogNode({canopyClient: canopy});

    $me = $("<div style='width:100%;'>\
        <div id=topbar></div>\
        <div id=main_sidebar></div>\
        <div id=main_top_center></div>\
        <div id=main_bottom_center></div>\
        <div id=main_right_side></div>\
    </div>");

}
