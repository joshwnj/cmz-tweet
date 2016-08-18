const cmz = require('cmz')
const elem = require('../util/elem')
const colors = require('../shared/colors')

module.exports = elem('a', cmz.inline('Link', `
& {
  color: ${colors.lightBlue};
  text-decoration: none;
}

&:hover {
  text-decoration: underline;
}
`))
