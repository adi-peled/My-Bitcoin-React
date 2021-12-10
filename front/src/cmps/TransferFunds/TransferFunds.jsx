import React, { Component } from 'react'
import './TransferFunds.scss'
export default class TransferFunds extends Component {

    state = {
        amount: null
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        (value);
        this.setState({ amount: value })
    }

    render() {
        return (
            <form className="flex column transfer-funds" onSubmit={(ev) => this.props.onTransfer(ev, this.state.amount)}>
                <h3 className="title">Transfer Funds</h3>
                <div className="transfer flex">
                    <span className="white">Amount:</span>
                    <input  className="bitcoin-input" name="amount" onChange={this.handleChange} type="number" />
                </div>
                <button className="btn-bitcoin">transfer</button>
            </form>
        )
    }
}
