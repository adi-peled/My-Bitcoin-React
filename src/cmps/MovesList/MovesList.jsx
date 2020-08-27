import React, { Component } from 'react'
import userService from '../../services/userService'
import { contactService } from '../../services/contactService'
import './MovesList.scss'
export default class MovesList extends Component {


    get sortedMoves() {
        const { moves } = this.props
        return moves.sort((a, b) => (a.at < b.at) ? 1 : -1)
    }




    render() {

        if (!this.sortedMoves.length) return < h3 className="no-moves">No moves yet</h3>
        return (
            <div className="move-list">
                <h1 className="title">Last Moves</h1>
                {this.sortedMoves.map(move =>
                    <div className="move" key={move._id}>
                        <div>
                            <span className="white">To:</span>
                            <span className="lightblue"> {move.to}</span>
                        </div>
                        <div className="coins">
                            <span className="white"> Amount:</span>
                            <span >    ₿ {move.amount}</span>
                        </div>
                        <div>
                            <span className="white">  At:</span>
                            <span className="lightblue">  {new Date(move.at).toLocaleString()}</span>
                        </div>

                    </div>
                )}
            </div>
        )
    }
}
