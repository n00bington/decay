'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** New error type for not checking if optional has something. */
var UncheckedOptionError = /** @class */ (function (_super) {
    __extends(UncheckedOptionError, _super);
    function UncheckedOptionError() {
        var _this = _super.call(this, 'Optional value has not been checked before use.') || this;
        // Fix cause extending Error is weird.
        _this.__proto__ = UncheckedOptionError.prototype;
        return _this;
    }
    return UncheckedOptionError;
}(Error));
exports.UncheckedOptionError = UncheckedOptionError;
/** New error type for not checking if resulting has something. */
var UncheckedResultError = /** @class */ (function (_super) {
    __extends(UncheckedResultError, _super);
    function UncheckedResultError() {
        var _this = _super.call(this, 'Resulting value has not been checked before use.') || this;
        // Fix cause extending Error is weird.
        _this.__proto__ = UncheckedResultError.prototype;
        return _this;
    }
    return UncheckedResultError;
}(Error));
exports.UncheckedResultError = UncheckedResultError;
