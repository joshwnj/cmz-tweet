const cmz = require('cmz')
const h = require('vhtml')
const elem = require('../util/elem')
const colors = require('../shared/colors')

module.exports = function (props) {
  const styles = cmz.inline('Stats', `
& {
  text-transform: uppercase;
  color: ${colors.midGrey};
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.lightGrey};
}

& > span {
  margin-right: 10px;
}

.number {
  color: black;
  font-weight: bold;
}
`)

  return elem('div', styles)(Object.keys(props).map((k) => {
    return h('span', {}, [
      h('span', { class: styles('number') }, props[k]),
      ' ',
      k
    ])
  }))
}
