import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component{
    render(){
        return (
                <div className="nav">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </div>
                );
    }
} 
export default Navbar;
