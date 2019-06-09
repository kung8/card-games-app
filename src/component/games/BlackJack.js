import React, { useState, useEffect, Component } from 'react'
import { connect } from 'react-redux'
import CardStyling from './CardStyling'

class BlackJack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            player1: [],
            player2: [],
            player3: [],
            player4: []
        }
    }
    // const [player1,setPlayer1] = useState([])
    // const [player2,setPlayer2] = useState([])
    // const [player3,setPlayer3] = useState([])
    // const [player4,setPlayer4] = useState([])
    // const [cards,setCards] = useState([])
    // const [state,dispatch] = useReducer()
    // useEffect(()=>{

    // },[])

    getCards = () => {
        this.setState({
            cards: [...this.props.cards]
        })
    }

    reset=()=>{
        this.setState({
            cards: [],
            player1: [],
            player2: [],
            player3: [],
            player4: []
        })
    }    
    initialDeal = (numPlayers) => {
        let { cards } = this.state
        let count = 1
        for (let i = 0; i < numPlayers * 2; i++) {
            let dealt = cards.splice(0, 1)
            if (count > numPlayers) {
                count = 1
            }
            let player = 'player' + count
            this.setState({
                [player]: [...this.state[player], ...dealt]
            })
            count++
        }
    }

    render() {
        const { player1, player2, player3, player4 } = this.state
        let player1Hand = player1.map(card => {
            return (
                <div key={card.card_id} style={{}}>
                    {CardStyling(card)}
                </div>
            )
        })
        let player2Hand = player2.map(card => {
            return (
                <div key={card.card_id}>
                    {CardStyling(card)}
                </div>)
        })
        let player3Hand = player3.map(card => {
            return (
                <div key={card.card_id}>
                    {CardStyling(card)}
                </div>)
        })
        let player4Hand = player4.map(card => {
            return (
                <div key={card.card_id}>
                    {CardStyling(card)}
                </div>
            )
        })
        return (
            <div style={{ background: 'grey', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}>
                <div>
                    <button onClick={() => this.getCards()}>Shuffle</button>
                    <button onClick={() => this.initialDeal(4)}>Deal</button>
                    <button>Pass</button>
                    <button onClick={()=>this.reset()}>Reset</button>
                </div>

                <div style={{ width: '73%', textAlign: 'center', minHeight: '300px', marginBottom: 10, border: 'black solid 2px' }}>
                    <h1>Player 1:</h1>
                    <div style={{ display: 'flex', width: 800 }}>
                        {player1Hand}
                    </div>
                </div>

                <div style={{ width: '73%', textAlign: 'center', minHeight: '300px', marginBottom: 10, border: 'black solid 2px' }}>
                    <h1>Player 2:</h1>
                    <div style={{ display: 'flex', width: 800 }}>
                        {player2Hand}
                    </div>
                </div>

                <div style={{ width: '73%', textAlign: 'center', minHeight: '300px', marginBottom: 10, border: 'black solid 2px' }}>
                    <h1>Player 3:</h1>
                    <div style={{ display: 'flex', width: 800 }}>
                        {player3Hand}
                    </div>
                </div>

                <div style={{ width: '73%', textAlign: 'center', minHeight: '300px', marginBottom: 10, border: 'black solid 2px' }}>
                    <h1>Player 4:</h1>
                    <div style={{ display: 'flex', width: 800 }}>
                        {player4Hand}
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        cards: reduxState.cards
    }
}

export default connect(mapStateToProps)(BlackJack)
