import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch , Route} from 'react-router-dom';
import List from './components/list/List';
import Header from './components/common/Header';
import NotFound from './components/not-found/notFound';
import Details from "./components/details/details";
import './index.css';

const App = () => {
  return (
     <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={List} exact />
                <Route path='/currency/:id' component={Details}/>
                <Route component={NotFound}/>
            </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
