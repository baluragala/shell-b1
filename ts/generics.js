var TypedQueue = /** @class */ (function () {
    function TypedQueue() {
        var _this = this;
        this.data = [];
        this.add = function (item) { return _this.data.push(item); };
        this.remove = function () { return _this.data.shift(); };
    }
    return TypedQueue;
}());
var n = new TypedQueue();
n.add(1);
var n1 = new TypedQueue();
n1.add([1]);
