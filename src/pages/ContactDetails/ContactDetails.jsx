import React, { Component } from 'react'
import { Link } from "react-router-dom";
import TransferFunds from '../../cmps/TransferFunds/TransferFunds';
import MovesList from '../../cmps/MovesList/MovesList';
import { contactService } from '../../services/contactService';
import { connect } from 'react-redux'
import userService from '../../services/userService'
import { loadContact, loadContacts } from '../../actions/ContactActions'
import { setUser, trnasferCoins } from '../../actions/UserActions'
import './ContactDetails.scss'


class _ContactDetails extends Component {

    state = {
        contact: null,
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        await this.props.loadContact(id)
        await this.props.loadContacts()
        await this.props.setUser()
        this.setState({ contact: this.props.contact })
    }

    onTransfer = (ev, amount) => {
        ev.preventDefault()
        if (!amount) return
        const move = {
            to: this.state.contact.name,
            from: this.props.user.name,
            amount,
        }
        this.props.trnasferCoins(move)
    }



    get moves() {
        const { moves } = this.props.user

        return moves.filter(move => move.to === this.props.contact.name)
    }


    render() {
        const { contact } = this.state
        if (!contact) return <div> loading</div>
        return (
            <section className="contact-details">
                <h3 className="title">  {contact.name}</h3>
                <div className="phone">
                    <span className="white">Phone:</span>
                    <span className="lightblue">      {contact.phone}</span>
                </div>
                <div className="email">
                    <span className="white">Email:</span>
                    <span className="lightblue">  {contact.email}</span>
                </div>
                <Link className="btn-bitcoin" to={`/contact/edit/${contact._id}`} >Edit </Link>


                <TransferFunds contact={contact} onTransfer={this.onTransfer} />
                <MovesList contact={contact} moves={this.moves} />
            </section>
        )
    }
}




function mapStateProps(state) {
    return {
        contact: state.contactReducer.currContact,
        user: state.userReducer.user,
    }
}
// Takes the action dispatchers from the actions file and puts them inside the component's props
const mapDispatchToProps = {
    loadContact,
    loadContacts,
    setUser,
    trnasferCoins
}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const ContactDetails = connect(mapStateProps, mapDispatchToProps)(_ContactDetails)