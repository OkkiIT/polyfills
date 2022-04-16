module.exports = function () {
  if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {

      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError("myMap was called on wrong type")
      }

      if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`)
      }

      const result = []
      for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
      }

      return result
    }
  }

  if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue) {

      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError("myReduce was called on wrong type")
      }

      if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`)
      }

      let acc = arguments.length >= 2 ? initialValue : this[0]
      let startPoint = arguments.length >= 2 ? 0 : 1;

      for (let i = startPoint; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
      }
      return acc
    }
  }

  if (!Array.prototype.myFlat) {
    Array.prototype.myFlat = function (depth = 1) {

      if (!Array.isArray(this)) {
        throw new TypeError("myFlat was called on wrong type")
      }

      if (isNaN(depth) || depth <= 0) {
        return this
      }

      let result = []
      function flatten(arr, depth) {
        for (let i = 0; i < arr.length; i++) {
          const currentElement = arr[i]

          if (Array.isArray(currentElement) && depth > 0) {
            result.push(...flatten(currentElement, depth - 1))
          } else {
            result.push(currentElement)
          }

        }
        return result
      }

      return flatten(this, depth)
    }
  }
}