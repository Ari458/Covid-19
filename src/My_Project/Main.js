import React from 'react';
import Covid from './Covid';
import State from './State';
import { HashRouter as Router,Switch,Route,Link } from "react-router-dom";
import './Covid.css';

function Main() {
    return (
        <>
        <div className="main">
        <div className="main_head">
                <h6 className="live">
                    <b className="blink">🔴</b> 
                    LIVE 
                </h6>
                <h3><a href="index.html" className="tracker">COVID-19 TRACKER INDIA</a></h3>
                <div className="link">
                    <Router>
                    <Link to="/Covid-19" className="india">
                        <span>IN</span><span>D</span><span>IA</span>
                        </Link>
                         <span className="br">|</span> 
                         <Link to="/State" className="states">STATES</Link>

                         <Switch>
                            <Route path="/Covid"><Covid/></Route>
                            <Route path="/State"><State/></Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        <Covid/>
        </div>
            
        </>
    );
}

export default Main;
