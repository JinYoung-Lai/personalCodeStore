var name = "Windows";
var object = {
  name: "Mac",
  getNameFunc: function () {
    var _this = this;
    return function () {
      return _this.name;
    };
  },
  getNameFunc2: function () {
    return function () {
      return this.name;
    };
  }
};
console.log(object.getNameFunc()()); // mac
console.log(object.getNameFunc2()()); // undefined