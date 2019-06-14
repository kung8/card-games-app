import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { handleCards } from '../../ducks/reducers/cardsReducer'
import { connect } from 'react-redux'
import BlackJack from './BlackJack'

class Cards extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        axios.get('/api/getcards').then(async res => {
            await this.setState({
                cards: res.data
            })
            this.shuffle()
        })
    }

    shuffle=()=>{
        const {cards} = this.state
        for(var i = cards.length-1; i>0; i--){
            var j = Math.floor(Math.random()*(i+1))
            var temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp 
        }
        this.props.handleCards(cards)
    }

    render() {
        return (
            <div>
                <BlackJack/>
            </div>
        )
    }

}

function mapStateToProps(reduxState){
    return{
        cards:reduxState.cardsReducer.cards
    }
}

export default connect(mapStateToProps,{handleCards})(Cards)