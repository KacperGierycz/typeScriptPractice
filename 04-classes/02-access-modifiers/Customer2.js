var Customer2 = /** @class */ (function () {
    function Customer2(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
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
// lets create a instance of our class
var myCustomer = new Customer2("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
