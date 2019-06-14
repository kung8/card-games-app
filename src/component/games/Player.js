import React, {Component} from 'react'
import CardStyling from './CardStyling'

export default class Player extends Component{
    render(){
        return(
            <div>
                <div key={this.props.card.card_id}>
                    {CardStyling(this.props.card)}
                </div>
            </div>
        )
    }
}