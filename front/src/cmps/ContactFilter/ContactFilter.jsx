import React, { Component } from 'react'

export default class ContactFilter extends Component {
    state = {
        name: ''
    }

    handleFilter = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? + target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onFilter({ ...this.state })
        })
    }

    render() {
        return (

            <div>
                <input className="bitcoin-input" name="name" type="text" placeholder="Search" onInput={this.handleFilter} />
            </div>
        )
    }
}
