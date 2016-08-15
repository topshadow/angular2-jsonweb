"use strict";
var Base = (function () {
    function Base() {
    }
    Object.defineProperty(Base.prototype, "isEdit", {
        get: function () {
            return window['isEdit'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "isShowNav", {
        get: function () {
            return window['isShowNav'];
        },
        set: function (value) {
            window['isShowNav'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "isShowFoot", {
        get: function () {
            return window['isShowFoot'];
        },
        set: function (value) {
            window['isShowFoot'] = value;
        },
        enumerable: true,
        configurable: true
    });
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=base.js.map