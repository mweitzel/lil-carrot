module.exports = {
  call: function (fn) {
    if(typeof fn !== 'function')
      throw new Error(JSON.stringify(fn) + ' is not a function')
    return fn.apply(fn, Array.prototype.slice.call(arguments, 1))
  }
, apply: function(fn, args) {
    if(typeof fn !== 'function')
      throw new Error(JSON.stringify(fn) + ' is not a function')
    return fn.apply(fn, args)
  }
}
