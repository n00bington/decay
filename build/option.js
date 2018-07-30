'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
/** Option class type */
var Optional = /** @class */ (function () {
    function Optional(value, force_none) {
        this.checked = false;
        this.value = value;
        this.force_none = force_none;
    }
    /** Check if this object has a value. */
    Optional.prototype.hasSome = function () {
        if (this.force_none) {
            return false;
        }
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
            throw new errors_1.UncheckedOptionError();
        }
        return this.value;
    };
    return Optional;
}());
exports.Optional = Optional;
/** Wrapper to make option type more natural. */
function Option(value, force_none) {
    if (force_none === void 0) { force_none = false; }
    return new Optional(value, force_none);
}
exports.Option = Option;
