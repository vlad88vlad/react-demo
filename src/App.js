import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom'
import './App.scss';
import Routing from './router'
import Logo from './imgs/logo.png'
import PermContactCalendar from 'material-react-icons/PermContactCalendar';
import Business from 'material-react-icons/Business';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <div className="wrapper">
                        <div className="all-content">

                            <header>
                                <Link to="/">
                                    <div>
                                        <img src={Logo}/>
                                        logo
                                    </div>
                                </Link>
                                <div style={{flex: 1}}/>
                                <Link to="/contact">
                                    <PermContactCalendar className='header-icon'/>

                                    <span className='link-text'>contact</span>

                                </Link>
                                <Link to="/about">
                                    <Business/>
                                    <span className='link-text'>about</span>
                                </Link>
                            </header>
                            <Routing/>
                        </div>
                        <footer>
                            <Link to="/contact">
                                contact
                            </Link>
                            <Link to="/about">
                                about
                            </Link>
                        </footer>

                    </div>

                </HashRouter>
            </div>
        );
    }
}

export default App;
