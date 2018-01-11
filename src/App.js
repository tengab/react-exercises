import React, {Component} from 'react';
import MyFirstComponent from './MyFirstComponent'
import Home from './Home'
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <MyFirstComponent name='Tomek' showName={true}/>

                    <Route path="/home" component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </div>
            </Router>
        );
    }
}

export default App;
