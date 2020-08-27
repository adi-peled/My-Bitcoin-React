import React, { Component } from 'react'
import bitcoinService from '../../services/bitcoinService'
import { connect } from 'react-redux'
import { setUser } from '../../actions/UserActions'
import MovesList from '../../cmps/MovesList/MovesList'

import './Home.scss'
class _Home extends Component {

    state = {
        rate: null
    }

    getRate() {
        bitcoinService.getRate().then(res => this.setState({ rate: res.data }))
    }

    async componentDidMount() {
        await this.props.setUser()
        this.getRate()
        const { user } = this.props
        if (!user) this.props.history.push('/signup');
    }

    get moves() {
        const { user } = this.props
        return user.moves
    }

    formatNumber(num, currency) {
        return num.toLocaleString('en-US', { style: 'currency', currency })
    }

    render() {
        const { user } = this.props
        const { rate } = this.state
        if (!user) return <div>loading</div>
        const { name, coins, currency } = user
        return (
            <section >
                <div className="user-details">
                    <h1 className="title">welcome  {name}</h1>
                    <div className=" detail ">
                        <span> BTC:</span>
                        <span className="coins">   ₿ {coins} </span>
                    </div>
                    <div className="detail rate">
                        <span> Rate: </span>
                        <span className="lightblue"> {this.formatNumber((1 / rate), currency)}</span>
                    </div>
                    <div className="detail currency">
                        <span >  {currency}:</span>
                        <span className="lightblue"> {this.formatNumber((1 / rate * coins), currency)} </span>
                    </div>
                </div>

                <MovesList moves={this.moves.slice(this.moves.length - 5, this.moves.length)} />


            </section>

        )
    }
}



function mapStateProps(state) {
    return {
        user: state.userReducer.user,
        rate: null
    }
}
// Takes the action dispatchers from the actions file and puts them inside the component's props
const mapDispatchToProps = {
    setUser
}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const Home = connect(mapStateProps, mapDispatchToProps)(_Home)