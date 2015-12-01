var jsdom = require('jsdom');
module.exports = (function () {
    function Parser() {
    }
    Parser.prototype.parse = function (html) {
        var deferred;
        var p = new Promise(function (resolve, error) {
            deferred = {
                resolve: resolve,
                error: error
            };
        });
        jsdom.env(html, function (error, window) {
            if (error) {
                deferred.error(error);
            }
            else {
                deferred.resolve(window.document.body);
            }
        });
        return p.then(this.parseDomNode, deferred.error);
    };
    Parser.prototype.parseDomNode = function (node) {
        return node;
    };
    return Parser;
})();
