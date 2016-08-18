const html = require('./components/tweet')

if (!module.parent) {
  if (typeof document !== 'undefined') {
    document.getElementById('root').innerHTML = html
  } else {
    console.log(html)
  }
}

if (module.hot) {
  module.hot.accept()
}

module.exports = html
