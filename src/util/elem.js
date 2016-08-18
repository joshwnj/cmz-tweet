const h = require('vhtml')

module.exports = function elem (tag, s) {
  return function (attr, children) {
    if (typeof attr === 'string' || Array.isArray(attr)) {
      children = attr
      attr = {}
    }

    if (s && !attr.class) {
      attr.class = s()
    }

    return h(tag, attr, children)
  }
}
