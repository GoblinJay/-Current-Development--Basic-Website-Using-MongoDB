import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginRegister from './pages/LoginRegister';
import SEO from './components/SEO';
import PWA from './components/PWA';
//import GoogleAnalytics from './components/Analytics/GoogleAnalytics';
//import Hotjar from './components/Analytics/Hotjar';

const App = () => {
    return (
        <Router>
            <SEO />
            <PWA />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={LoginRegister} />
            </Switch>
        </Router>
    );
};

export default App;