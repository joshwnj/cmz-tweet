const cmz = require('cmz')
const h = require('vhtml')
const elem = require('../util/elem')
const flex = require('../shared/flex')

const box = flex({
  align: 'center',
  space: 'around'
})

const styles = cmz.inline('Actions', `
& {
  ${box}
}

& > button {
  margin: 16px 0;
}
`)

function Item (props) {
  return h('button', { class: styles('item') }, props.name)
}

module.exports = function () {
  const items = [
    { name: 'reply' },
    { name: 'retweet' },
    { name: 'like' },
    { name: 'options' }
  ]
  return elem('div', styles)(items.map(Item))
}
