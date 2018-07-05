I18n = (function () {

    function I18n() {
        this.langage = {};
    }

    I18n.prototype.addLanguag = function addLanguag(key, language) {
        this.langage[key] = language;
    }

    I18n.prototype.getText = function getText() {

    }

})();