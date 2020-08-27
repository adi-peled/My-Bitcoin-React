import React from 'react'
import {ContactPreview} from '../ContactPreview/ContactPreview'
import contactService from '../../services/contactService';
export default function ContactList(props) {
    const { contacts, removeContact } = props





    return (
        < div className="contact-list">
            {
                contacts.map(contact =>
                    < ContactPreview key={contact._id} contact={contact} removeContact={removeContact} />
                )
            }
        </div >


    )
}
