import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard']; // accesible only if logged in

const onEnterPublicPage = () => { // prevents going back
    if (Meteor.userId()) { // if user logged in
        browserHistory.replace('/dashboard');
    }
};

const onEnterPrivatePage = () => { // prevents going back
    if (!Meteor.userId()) { // if user not logged in
        browserHistory.replace('/');
    }
};

export const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Login} onEnter={onEnterPublicPage} />
        <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
        <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage} />
        <Route path="/dashboard/:id" component={Dashboard} onEnter={onEnterPrivatePage} />
        <Route path="*" component={NotFound} />
    </Router>
);

export const onAuthChange = (isAuthenticated) => {
    const pathName = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    const isAuthenticatedPage = authenticatedPages.includes(pathName);

    if (isAuthenticated && isUnauthenticatedPage) {
        browserHistory.replace('/dashboard');
    } else if (!isAuthenticated && isAuthenticatedPage) {
        browserHistory.replace('/');
    }
};