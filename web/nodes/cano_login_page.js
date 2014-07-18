function CanoLoginPageNode(canopy, dispatcher) {
    var $me,
        loginDialogNode,
        signupDialogNode;

    $.extend(this, new CanoNode());

    this.get$ = function() {
        return $me;
    }

    this.onLive = function() {
        loginDialogNode.render($("#login_dialog"));
        signupDialogNode.render($("#signup_dialog"));
        $('body').css('background', 'white');
    }

    loginDialogNode = new CanoLoginDialogNode({
        canopyClient: canopy,
        dispatcher: dispatcher,
        onExpand: function() {
            signupDialogNode.collapse();
        }
    });

    signupDialogNode = new CanoSignupDialogNode({
        canopyClient: canopy,
        dispatcher: dispatcher,
        onExpand: function() {
            loginDialogNode.collapse();
        }
    });

    $me = $("\
        <div class=center_channel style='position: relative;'>\
            <div class=cano-login_page-images-outer>\
                <img src=http://www.canopy.link/devel/canopy_logo.jpg><br>\
                <img src=http://www.canopy.link/devel/fan_cloud_iphone.png>\
            </div>\
            <div class=cano-login_page-dialogs-outer>\
                <div id=login_dialog></div>\
                <div id=signup_dialog></div>\
            </div>\
        </div>\
        <div style='position:absolute; width:100%; top:650px;'>\
            <div class=center_channel>\
                <div class=cano-banner-dialog style='width:940px;'>\
                    <span class=logo-in-text>Canopy</span> is an open source Internet of Things platform.\
                    <div class=small_margin_top>\
                        <span class=logo-in-text>http://canopy.link</span> is the largest hosted deployment of the <span class=logo-in-text>Canopy Cloud Service</span>.\
                    </div>\
                    <div style='border-top:1px solid #c0c0c0; padding-top:8px; margin-top:8px'>\
                        <div class='ml thicker' style='display:inline-block; vertical-align:baseline'>\
                            <a href='foo'>Learn More</a>\
                        </div>\
                        <div class='s thicker' style='display:inline-block; vertical-align:baseline; padding-left:30px;'>\
                            <a href='foo'>Make your product smart with Canopy</a>\
                        </div>\
                        <div class='s thicker' style='display:inline-block; vertical-align:baseline; padding-left:30px;'>\
                            <a href='foo'>Develop apps for Canopy-enabled products</a>\
                        </div>\
                        <div class='s thicker' style='display:inline-block; vertical-align:baseline; padding-left:30px;'>\
                            <a href='foo'>F.A.Q.</a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    ");
}
