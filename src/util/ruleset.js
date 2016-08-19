function Ruleset (rules) {
  this.rules = rules
}

Ruleset.prototype.toString = function () {
  const rules = this.rules
  return Object.keys(rules).map((key) => {
    const val = rules[key]
    return val && `${key}: ${val};`
  }).filter(Boolean).join('\n')
}

module.exports = Ruleset
