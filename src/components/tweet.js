const cmz = require('cmz')
const h = require('vhtml')
const elem = require('../util/elem')

const Nav = require('./nav')
const Actions = require('./actions')
const Author = require('./author')
const Media = require('./media')
const Time = require('./time')
const Stats = require('./stats')
const Link = require('./link')

const Tweet = elem('div', cmz.inline('Tweet', `
& {
  max-width: 300px;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
}

@media (min-width: 600px) {
  & {
    max-width: 600px;
  }
}
`))

const Body = elem('div', cmz.inline('Body', `
& {
  font-weight: 300;
  font-size: 1.25rem;
  color: #333;
}
`))

module.exports = Tweet([
  Nav(),
  Author([
    Author.Image({ src: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_reasonably_small.jpg' }),
    Author.Name([
      h('h1', {}, 'Max Stoiber'),
      h('h2', {}, '@mxstbr')
    ])
  ]),
  Body([
    '👏',
    ' Love love love this article by ',
    Link({ href: '...' }, '@chantastic'),
    '. CSS-in-JS isn’t a campaign against CSS! ',
    Link({ href: '...' }, 'medium.com/learnreact/sca…')
  ]),
  Media({ src: 'https://pbs.twimg.com/media/CnwCr-nW8AAcQeZ.jpg' }),
  Time({ ms: 1468955820000 }),
  Stats({
    retweets: 32,
    likes: 79
  }),
  Actions()
])
