import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import utilService from '../../services/utilService';
import './Header.scss';
import logo from '../../assets/img/bitcoin.png';
import { ReactComponent as Logo } from '../../assets/img/bitcoin.svg';
function _Header(props) {

    function user() {
        return utilService.loadFromStorage('user')
    }

    return (
        <header>
            <nav className="flex" >
                <Logo  className="logo"/>
                <ul className="flex nav-header" >
                    <li>  <NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="/contact">Contact</NavLink> </li>
                    {!user() && <li>  <NavLink to="/signup">Sign up</NavLink></li>}
                    {user() && <button className="btn-logout" onClick={() => props.logout()}> Logout</button>}
                    <li> <NavLink to="/stats">Stats</NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}

export const Header = withRouter(_Header)
