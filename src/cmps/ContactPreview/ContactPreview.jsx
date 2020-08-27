import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import './ContactPreview.scss'
import trash from '../../assets/img/trash.png'


function _ContactPreview({ contact, removeContact }) {

    function seeDetails() {

    }

    return (
        <div className="contact-preview">
            <Link to={`contact/${contact._id}`} onClick={seeDetails}>
                <img className="img-robo" src={`https://robohash.org/4ree${contact.name}`} alt="" />
                <span className="name">    {contact.name}</span>
            </Link>
            <img className="img-trash"  src={trash} onClick={() => removeContact(contact._id)} />
        </div>
    )
}


export const ContactPreview = withRouter(_ContactPreview)
