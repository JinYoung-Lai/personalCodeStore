exports.foo = 'bar'

module.exports.a = '1123'


// 给 exports 赋值会断开和 module.exports 之间的引用
// 同理，给 module.exports 重新赋值也会断开

// 这里导致 exports !== module.exports
exports = {
  a: 456
}


module.exports.foo = 'haha'

exports.c = 456 // returns { foo: 'haha', a: '1123' }


// 重新建立了和 module.exports 之间的引用关系了
exports = module.exports

exports.c = 456 // retuns { foo: 'haha', a: '1123', c: 456 }

// 谁来 require 我，谁就得到 module.exports
// 默认在代码的最后有一句：
// 一定要记住，最后 return 的是 module.exports
// 不是 exports
// 所以你给 exports 重新赋值不管用，
// return module.exports