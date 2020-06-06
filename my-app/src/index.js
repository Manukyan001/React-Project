import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import NotFound from './Components/NotFound/NotFound'
import Detail from './Components/Detail/Detail'



const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' component={List} exact/>
    <Route path='/currency/:id' component={Detail}/>
                <Route component={NotFound}/>

            </Switch> 
        </BrowserRouter>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

