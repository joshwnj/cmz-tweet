module.exports = function flex (opts) {
  opts = opts || {}
  const rules = []

  rules.push('display: ' + (opts.display || 'flex'))

  if (opts.align) {
    rules.push('align-items: ' + opts.align)
  }

  if (opts.space) {
    rules.push('justify-content: space-' + opts.space)
  }

  return rules.join(';\n') + ';\n'
}
