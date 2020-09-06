import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadContacts, setFilter, removeContact } from '../../actions/ContactActions'
import ContactList from '../../cmps/ContactList/ContactList';
import ContactFilter from '../../cmps/ContactFilter/ContactFilter';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Contact.scss'
class _Contact extends Component {


    componentDidMount() {
        this.props.loadContacts()
        const { user } = this.props
        if (!user) this.props.history.push('/signup');

    }

    onFilter = (filterBy) => {
        this.props.setFilter(filterBy)
        this.props.loadContacts()
    }


    removeContact = async (id) => {
        await this.props.removeContact(id)
    }




    render() {
        const { contacts } = this.props
        return (
            <div className="flex column">
                <h1 className="title">contacts</h1>
                <ContactFilter onFilter={this.onFilter} />
                {contacts && <ContactList contacts={contacts} removeContact={this.removeContact} />}
                <Link className="btn-bitcoin" to="contact/edit" >   Add Contact  </Link>

            </div>
        )
    }
}



// gets the global state and puts it in the props of the component
function mapStateProps(state) {
    return {
        contacts: state.contactReducer.contacts,
        filterBy: state.contactReducer.filterBy,
        user: state.userReducer.user,
    }
}
// Takes the action dispatchers from the actions file and puts them inside the component's props
const mapDispatchToProps = {
    loadContacts,
    setFilter,
    removeContact,

}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const Contact = connect(mapStateProps, mapDispatchToProps)(_Contact)