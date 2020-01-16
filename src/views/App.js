import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Homepage } from './HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
		return (
            <div id="homepage">
                <Router>
                    <header>
                        <div className="logo-container">
                            <h1>React + Redux + Router</h1>
                            <p>{this.action}</p>
                        </div>
                        <div className="nav-links d-none d-sm-block">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </div>
                    </header>
                    <main>
                        <Route exact path="/" component={Homepage} />
                    </main>
                </Router>
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
        action: state.sampleReducer.action,  
	}
}

export default connect(mapStateToProps)(App);
