'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
var Resulting = /** @class */ (function () {
    function Resulting(value) {
        this.checked = false;
        this.value = value;
    }
    Resulting.prototype.isError = function () {
        this.checked = true;
        return this.value instanceof Error;
    };
    Resulting.prototype.isOk = function () {
        return !this.isError();
    };
    Resulting.prototype.unwrap = function () {
        if (!this.checked) {
            throw new errors_1.UncheckedResultError();
        }
        return this.value;
    };
    return Resulting;
}());
;
function Result(val) {
    return new Resulting(val);
}
exports.Result = Result;
