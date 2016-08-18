const cmz = require('cmz')
const h = require('vhtml')
const elem = require('../util/elem')
const colors = require('../shared/colors')

module.exports = function Media (props) {
  const styles = cmz.inline('Media', `
& {
  margin: 20px 0;
}

& > img {
  max-width: 100%;
  border: 1px solid ${colors.lightGrey};
}
`)

  return elem('div', styles)([
    h('img', { src: props.src })
  ])
}
