import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/navbar';
import {Switch,BrowserRouter,Route} from 'react-router-dom';

class Full extends React.Component{
    render(){
        return(
               <Navbar />
               );
    }
}
export default Full;
