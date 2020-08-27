import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadContact, saveContact, loadContacts } from '../../actions/ContactActions'
import './ContactEdit.scss'
class _ContactEdit extends Component {

    state = {
        contact: null
    }
    async componentDidMount() {
        
        const { id } = this.props.match.params
        await this.props.loadContact(id)
        await this.props.loadContacts()
        this.setState({ contact: this.props.contact })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
    }

    saveContact = async (ev) => {
        ev.preventDefault()
        this.props.saveContact(this.state.contact)
        this.props.history.push('/contact')
    }



    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <form className="edit" onSubmit={this.saveContact}>
                <h3 className="title">Edit Contact</h3>
                <div className="name">
                    <span className="white">Name:</span>
                    <input className="bitcoin-input" type="text" name="name" value={contact.name} onChange={this.handleChange} />
                </div>
                <div className="phone">
                    <span className="white">Phone:</span>
                    <input className="bitcoin-input" type="text" name="phone" value={contact.phone} onChange={this.handleChange} />
                </div>
                <div className="email">
                    <span className="white">Email:</span>
                    <input className="bitcoin-input" type="text" name="email" value={contact.email} onChange={this.handleChange} />
                </div>
                <button className="btn-bitcoin" >save contact</button>
            </form>
        )
    }
}



function mapStateProps(state) {
    return {
        contact: state.contactReducer.currContact
    }
}
// Takes the action dispatchers from the actions file and puts them inside the component's props
const mapDispatchToProps = {
    loadContact,
    saveContact,
    loadContacts
}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const ContactEdit = connect(mapStateProps, mapDispatchToProps)(_ContactEdit)