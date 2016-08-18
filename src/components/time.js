const cmz = require('cmz')
const elem = require('../util/elem')
const colors = require('../shared/colors')
const moment = require('moment')

module.exports = function (props) {
  const styles = cmz.inline('Time', `
& {
  color: ${colors.midGrey};
  font-size: 0.9rem;
  padding: 0 0 1rem 0;
  border-bottom: 1px solid ${colors.lightGrey};
  display: block;
}
`)
  return elem('time', styles)(
    {
      datetime: props.ms
    },
    moment(props.ms).format('MMM D, Y, h:m A')
  )
}
