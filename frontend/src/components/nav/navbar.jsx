import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../assets/images/logo.png'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (!this.props.loggedIn) {
            return (
                <span className='actions-container'>
                    <li className='actions-item'>
                        <Link to={'/login'} className='btn btn-session btn-login'>Log In</Link>
                    </li>
                    <li className='actions-item'>
                        <Link to={'/signup'} className='btn btn-session btn-signup'>Sign Up</Link>
                    </li>
                </span>
            );
        } else {
            return (
                <span className='actions-container'>
                    <li className='tab-link actions-item'>
                        <Link to={'/perfil'}>Perfil</Link>
                    </li>
                    <li className='actions-item'>
                        <button className='btn btn-session btn-logout' onClick={this.logoutUser}>Logout</button>
                    </li>
                </span>
            );
        }
    }

    render() {
        return (
            <div id='header' className='nav-wrapper'>
                <div className="group nav-inner" id='header-inner'>
                    <div id='logo' className='nav-logo'>
                        <a href="/">
                            <img src={logo} alt=""/>
                        </a>
                    </div>
                    <ul id='nav' className='main-nav' role='navigation'>
                        <span className='links-container'>
                            <li className='tab-link actions-item'>
                                <Link to={'/habitaciones'}>Habitaciones</Link>
                            </li>
                            <li className='tab-link actions-item'>
                                <Link to={'/promociones'}>Promociones</Link>
                            </li>                         
                            <li className='tab-link actions-item'>
                                <Link to={'/contacto'}>Contactenos</Link>
                            </li>                         
                        </span>
                        {this.getLinks()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;