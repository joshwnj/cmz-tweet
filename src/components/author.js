const cmz = require('cmz')
const h = require('vhtml')
const elem = require('../util/elem')
const colors = require('../shared/colors')
const flex = require('../shared/flex')

const box = flex({
  align: 'center'
})

const Author = elem('div', cmz.inline('Author', `
& {
  ${box}
  margin-bottom: 16px;
}
`))

const Name = elem('div', cmz.inline('AuthorName', `
& > h1,
& > h2 {
  margin: 0;
  padding: 0;
}

& > h1 {
  font-size: 16px;
}

& > h2 {
  font-size: 14px;
  font-weight: normal;
  color: ${colors.midGrey};
}
`))

const Image = function (props) {
  return elem('div', cmz.inline('AuthorImage', `
& {
  width: 32px;
  margin-right: 16px;
}

& > img {
  max-width: 100%;
}
`))(h('img', { src: props.src }))
}

module.exports = Author
module.exports.Name = Name
module.exports.Image = Image
