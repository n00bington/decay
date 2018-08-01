'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
var Resulting = /** @class */ (function () {
    function Resulting(value, is_fail) {
        if (is_fail === void 0) { is_fail = false; }
        this.is_fail = false;
        this.checked = false;
        this.value = value;
        this.is_fail = is_fail;
    }
    Resulting.prototype.isError = function () {
        this.checked = true;
        if (this.is_fail) {
            return true;
        }
        return this.value instanceof Error;
    };
    Resulting.prototype.isOk = function () {
        return !this.isError();
    };
    Resulting.prototype.getError = function () {
        if (this.value instanceof Error) {
            return this.value;
        }
        if (typeof this.value === 'string') {
            return new Error(this.value);
        }
        return this.value;
    };
    Resulting.prototype.unwrap = function () {
        if (!this.checked) {
            throw new errors_1.UncheckedResultError();
        }
        return this.value;
    };
    return Resulting;
}());
exports.Resulting = Resulting;
;
function Result(val, is_fail) {
    if (is_fail === void 0) { is_fail = false; }
    return new Resulting(val, is_fail);
}
exports.Result = Result;
