import React from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';

import TestModule from './testModule/testModule.jsx';

export const Modules = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={TestModule}/>

            <Redirect
                from="/*"
                to="/"/>
        </Switch>
    );
};

export default withRouter(Modules);