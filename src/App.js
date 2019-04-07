import React, { Component } from 'react';
import Box from './components/Box';
import ReactGA from 'react-ga';
import 'bulma';
import './App.css';

ReactGA.initialize(process.env.REACT_APP_GA_ID);

const images = require.context('../public/images', true);

const info = require('./info.json');
// const logo = require('./logo.png');
const config = require('./config.json');
const logo = images('./logo.png');
const faGithub = require('./github-brands.svg');
const defaultTag = info.tags[0];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: defaultTag,
        };
    }

    componentDidMount = () => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        document.title = info.fullName;
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#" onClick={(e) => { e.preventDefault(); this.setState({ page: defaultTag }); }}>
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
                                {info.github ?
                                    <a className="icon is-pulled-right" href={'https://github.com/' + info.github}>
                                        <img src={faGithub} alt="Github" />
                                    </a>
                                    : ''}
                                <h1 className="title is-1">{info.fullName}</h1>
                                <h4 className="subtitle is-4">{info.position}</h4>

                                <p>{info.bio}</p>
                            </div>
                            {
                                config.mobileTags &&
                                    <div className="box is-hidden-desktop level">
                                        {
                                            info.tags.map((tag, i) => {
                                                return <a key={i} className="level-item" href="#" onClick={(e) => { e.preventDefault(); this.setState({ page: tag }); }}>{tag}</a>
                                            })
                                        }
                                    </div>
                            }
                            {info.boxes.filter(box => !box.column || box.column === 1).map((box, i) => {
                                if (box.tag && this.state.page !== box.tag) {
                                    return '';
                                }
                                return (
                                    <Box
                                        key={i}
                                        title={box.title}
                                        paragraph={box.paragraph}
                                        items={box.items}
                                        image={box.image}
                                    />
                                );
                            })}
                        </div>
                        <div className="column">
                            {info.boxes.filter(box => box.column === 2).map((box, i) => {
                                if (box.tag && this.state.page !== box.tag) {
                                    return '';
                                }
                                return (
                                    <Box
                                        key={i}
                                        title={box.title}
                                        paragraph={box.paragraph}
                                        items={box.items}
                                        image={box.image}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
