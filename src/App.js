import React, { Component } from 'react'
import Box from './components/Box'
import ReactGA from 'react-ga'
import 'bulma'
import './App.css'

ReactGA.initialize(process.env.REACT_APP_GA_ID)

const images = require.context('../public/images', true)

const info = require('./info.json')
const logo = images('./logo.png')
const faGithub = require('./github-brands.svg')
const faTwitter = require('./twitter-brands.svg')
const defaultTag = info.tags[0]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: defaultTag,
      menuOpen: false,
    }
  }

  componentDidMount = () => {
    ReactGA.pageview(window.location.pathname + window.location.search)
    document.title = info.fullName
  }

  replaceMarkdownLinks = item => {
    if (Array.isArray(item)) {
      item = item.join('<br />')
    }
    return item.replace(
      /\[(.*?)]\(((?:https?|www|\/).*?)\)/,
      "<a href='$2' target='_blank'>$1</a>"
    )
  }

  renderParagraphs = items => {
    let arr = [].concat(items)
    return (
      <div>
        {arr.map((p) => {
        console.log(p)
        return (
          <p
            dangerouslySetInnerHTML={{
              __html: this.replaceMarkdownLinks(p)
            }}
          />
        )
      })}
    </div>
    )
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a href={'/' + defaultTag} className="navbar-item"
              onClick={(e) => { e.preventDefault(); this.setState({ page: defaultTag }) }}
            >
              <img src={logo} alt={info.fullName} />
            </a>
            <a href={'/menu'} className="navbar-burger burger"
              onClick={(e) => { e.preventDefault(); this.setState((previousState) => { return { menuOpen: !previousState.menuOpen } })}}
              role="button"
              aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={'navbar-menu' + (this.state.menuOpen ? ' is-active' : '')}>
            <div className="navbar-start">
              {
                info.tags.map((tag, i) => {
                  return (
                    <a href={'/' + tag} className={'navbar-item' + (i > 2 ? ' is-hidden-mobile' : '')}
                      onClick={(e) => { e.preventDefault(); this.setState({ page: tag, menuOpen: false }) }}
                      key={i}
                    >
                      {tag}
                    </a>
                  )
                })
              }
            </div>
          </div>
        </nav>

        <section className="section hero is-fullheight-with-navbar">
          <div className="columns">
            <div className="column">
              <div className="box">
                {info.github ?
                  <a className="icon is-pulled-right" href={'https://github.com/' + info.github}>
                    <img src={faGithub} alt="Github" />
                  </a>
                  : ''}
                {info.twitter ?
                  <a className="icon is-pulled-right" href={'https://twitter.com/' + info.twitter}>
                    <img src={faTwitter} alt="Twitter" />
                  </a>
                  : ''}
                <h1 className="title is-1">{info.fullName}</h1>
                <h4 className="subtitle is-4">{info.position}</h4>

                {this.renderParagraphs(info.bio)}

              </div>
              {info.boxes.filter(box => !box.column || box.column === 1).map((box, i) => {
                if (box.tag && this.state.page !== box.tag) {
                  return ''
                }
                return (
                  <Box
                    key={i}
                    title={box.title}
                    paragraph={box.paragraph}
                    items={box.items}
                    image={box.image}
                    date={box.date}
                  />
                )
              })}
            </div>
            <div className="column">
              {info.boxes.filter(box => box.column === 2).map((box, i) => {
                if (box.tag && this.state.page !== box.tag) {
                  return ''
                }
                return (
                  <Box
                    key={i}
                    title={box.title}
                    paragraph={box.paragraph}
                    items={box.items}
                    image={box.image}
                    date={box.date}
                  />
                )
              })}
            </div>
          </div>
          <div className="level porte-credit">
            <div className="level-item is-size-7">
              <p>You can publish a site like this for free in about 20 minutes with <a href="https://github.com/sunfarm/porte">Porte</a>!</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
