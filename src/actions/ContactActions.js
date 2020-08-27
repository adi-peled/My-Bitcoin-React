import { contactService } from "../services/contactService"

// Action Creator
const _setContact = (contact) => ({ type: 'SET_CONTACT', contact })
const _setContacts = (contacts) => ({ type: 'SET_CONTACTS', contacts })
const _removeContact = (id) => ({ type: 'REMOVE_CONTACT', id })
const _addContact = (contact) => ({ type: 'ADD_CONTACT', contact })
const _updateContact = (contact) => ({ type: 'UPDATE_CONTACT', contact })

// Action Dispatcher 
export function loadContacts() {
    return async (dispatch, getState) => {
        const contacts = await contactService.getContacts(getState().contactReducer.filterBy)
        dispatch(_setContacts(contacts))
    }
}

export function removeContact(id) {
    return dispatch => {
        return contactService.deleteContact(id).then(() => dispatch(_removeContact(id)))
    }
}

export function loadContact(id) {
    return async dispatch => {
        if (id) {
            const contact = await contactService.getContactById(id)
            dispatch(_setContact(contact))
        } else {
            const contact = await contactService.getEmptyContact()
            dispatch(_setContact(contact))
        }
    }
}



export function saveContact(contact) {
    return async dispatch => {
        const type = (contact._id) ? '_updateContact' : 'addContact'
        const savedContact = contactService.saveContact(contact)
        if (type === '_updateContact') {
            dispatch(_updateContact(savedContact))
        } else {
            dispatch(_addContact(savedContact))
        }
    }
    //   return  contact._id ? updateContact(contact) : addContact(contact)
}



export function setFilter(filterBy) {
    return dispatch => {
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}