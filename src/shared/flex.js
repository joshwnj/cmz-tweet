const Ruleset = require('../util/ruleset')

module.exports = function (opts) {
  opts = opts || {}

  return new Ruleset({
    display: opts.display || 'flex',
    'align-items': opts.align,
    'justify-content': opts.space && `space-${opts.space}`
  })
}
