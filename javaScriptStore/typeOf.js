function typeOf(o) {
  var _toString = Object.prototype.toString
  var _type = {
    "undefined": "undefined",
    "number": "number",
    "boolean": "boolean",
    "string": "string",
    "[object Function]": "function",
    "[object RegExp]": "regexp",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object Error]": "error"
  }
  return _type[typeof o] || _type[_toString.call(o)] || (o ? "object" : "null")
}
console.log(typeof NaN)
var a = Math.abs
console.log(typeOf(a))