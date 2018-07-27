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
var NODE_ENV = process.env['NODE_ENV'];
/** New error type for not checking if optional has something. */
var UncheckedOptionError = /** @class */ (function (_super) {
    __extends(UncheckedOptionError, _super);
    function UncheckedOptionError() {
        var _this = _super.call(this, 'Optional value has not been checked before use.') || this;
        // Fix cause Error is weird.
        _this.__proto__ = UncheckedOptionError.prototype;
        return _this;
    }
    return UncheckedOptionError;
}(Error));
exports.UncheckedOptionError = UncheckedOptionError;
/** Option class type */
var Optional = /** @class */ (function () {
    function Optional(value) {
        this.checked = false;
        this.value = value;
    }
    /** Check if this object has a value. */
    Optional.prototype.hasSome = function () {
        var type = typeof this.value;
        this.checked = true;
        return (type !== 'undefined') && (type !== 'object' || this.value !== null);
    };
    /** Check if this object has no value. */
    Optional.prototype.hasNone = function () {
        return !this.hasSome();
    };
    /** Get the value held by the Option, throws if not checked first. */
    Optional.prototype.unwrap = function () {
        if (!this.checked) {
            throw new UncheckedOptionError();
        }
        return this.value;
    };
    return Optional;
}());
/** Wrapper to make option type more natural. */
function Option(value) {
    return new Optional(value);
}
exports.Option = Option;
