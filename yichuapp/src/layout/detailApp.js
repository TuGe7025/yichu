import React from 'react';
import Detail from '@/views/detail';
import {  Switch, Route } from 'react-router-dom';

 const App = () => (
    <Switch>
        <Route path='/detail/:id'  component = {Detail}/>
    </Switch>
)

export default App