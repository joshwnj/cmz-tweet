const cmz = require('cmz')
const h = require('vhtml')
const elem = require('../util/elem')
const colors = require('../shared/colors')
const flex = require('../shared/flex')

const box = flex({
  align: 'center',
  space: 'between'
})

const styles = cmz.inline('Nav', `
& {
  ${box}
  border-bottom: 1px solid ${colors.lightGrey};
  margin-bottom: 16px;
}

.item {
  margin: 16px 0;
}
`)

function Item (props) {
  return h('button', { class: styles('item') }, props.name)
}

module.exports = function () {
  const items = [
    { name: 'home' },
    { name: 'notifications' },
    { name: 'dms' },
    { name: 'search' },
    { name: 'profile' }
  ]
  return elem('div', styles)(items.map(Item))
}
