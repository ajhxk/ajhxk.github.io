(function () {

    /**
     * 判断PC还是手机
     */
    function isPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod", "smartisan", "BlackBerry"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    function isJudge() {
        var url = window.location.href;
        return (-1 !== url.indexOf('isJudeg=true')) ? true : false;
    }

    function judgeInit() {
        var _isPC = isPC();
        var _url = window.location.href;
        if (isJudge()) {
            return;
        }
        if (_isPC && -1 !== _url.indexOf('mobile')) {
            window.location.href = '/TryMinex/pc/index.html?isJudeg=true';
        }
        else if(!_isPC && -1 !== _url.indexOf('pc')){
            window.location.href = '/TryMinex/mobile/page/index.html?isJudeg=true';
        }
    }



    judgeInit();

})();