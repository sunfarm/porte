import React, { Component } from 'react';
import Box from './components/Box';
import ReactGA from 'react-ga';
import 'bulma';
import './App.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCode, faMusic, faGithub } from '@fortawesome/free-solid-svg-icons'

// library.add(faCode, faMusic, faGithub)

ReactGA.initialize(process.env.REACT_APP_GA_ID);

const info = require('./info.json');
const logo = require('./logo.png');
const image = require('./background.jpg');
const faGithub = require('./github-brands.svg');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: info.tags[0],
        };
    }

    componentDidMount = () => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href={window.location.href}>
                            <img src={logo} alt={info.fullName} />
                        </a>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-start">
                            {/* <a className="navbar-item" href={window.location.href}>{info.fullName}</a> */}
                            {info.tags.map((tag, i) => {
                                return <a key={i} className="navbar-item" href="#" onClick={(e) => { e.preventDefault(); this.setState({ page: tag }); }}>{tag}</a>
                            })}
                        </div>
                    </div>
                </nav>

                <section className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="box">
                                <a className="icon is-pulled-right" href={'https://github.com/' + info.github}>
                                    <img src={faGithub} alt="Github" />
                                </a>
                                <h1 className="title is-1">{info.fullName}</h1>
                                <h4 className="subtitle is-4">{info.position}</h4>

                                <p>{info.bio}</p>
                            </div>
                            {info.boxes.map((box, i) => {
                                if (box.tag && this.state.page !== box.tag) {
                                    return '';
                                }
                                return (
                                    <Box
                                        key={i}
                                        title={box.title}
                                        paragraph={box.paragraph}
                                        items={box.items}
                                    />
                                );
                            })}
                        </div>
                        <div className="column">
                            <img className="rounded" src={image}></img>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
