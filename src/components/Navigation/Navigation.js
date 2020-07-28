import React from 'react';
import { Router, Link, } from 'react-router-dom';
import Context from '../../Context/Context';


export default function Navigation() {
    const history = React.useContext(Context);

    return (
        <div>
            <Router history={history}>
                <Link to="/effectandref">
                    <button>Effect and Ref</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/hoc">
                    <button>Hoc</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/renderprops">
                    <button>Render Props</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/state">
                    <button>Use Satate</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/effect">
                    <button>Use Effect</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/layout">
                    <button>Use Layout Effect</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/callback">
                    <button>Use Callback Effect</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/memo">
                    <button>Use Memo Effect</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/reducer">
                    <button>Use Reducer Effect</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/context">
                    <button>Use Context Effect</button>
                </Link>
            </Router>
        </div>
    )
}
