import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Header from './Components/Header/Header';
import List from './Components/List/List';



const App = () => {
    return(
        <div>
            <Header/>
            <List/>
            
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

