"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer2 = void 0;
var Customer2 = /** @class */ (function () {
    function Customer2(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theName) {
            this._firstName = theName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theName) {
            this._lastName = theName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
exports.Customer2 = Customer2;
