import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardStyling from './CardStyling'
import Player from './Player'
import socket from 'socket.io-client'
import Buttons from './Buttons'

class BlackJack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            player1: [],
            player2: [],
            player3: [],
            player4: [],
            numberOfPlayers:[],
            isClicked:false,
            user:{}
        }
    }

    componentDidMount(){
        this.setState({
            user:this.props.user[0]
        })
    }

    getCards = () => {
        this.setState({
            cards: this.props.cards
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

    counting=(id)=>{
        this.setState({
            numberOfPlayers:[...this.state.numberOfPlayers,id]
        })
    }

    deal = (num) => {
        let {cards} = this.state
        let player = 'player' + num
        if(this.state[player].length<5){
            let dealt = cards.splice(0,1)
            console.log(dealt)
            this.setState({
                [player]:[...this.state[player],...dealt],
            })
            if(num < this.state.numberOfPlayers){
                num++
                player = 'player' + num
                this.setState({
                    
                })
            }
        } else {
            alert('Sorry too many cards')
        }
    }

    render() {
        console.log(this.props.user)
        const { player1, player2, player3, player4 } = this.state
        let player1Hand = player1.map(card => {
            return (<Player card={card}/>)
        })
        let player2Hand = player2.map(card => {
            return <Player card={card}/>
        })
        let player3Hand = player3.map(card => {
            return <Player card={card}/>
        })
        let player4Hand = player4.map(card => {
            return <Player card={card}/>
        })

        return (
            <div style={{ background: 'grey', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}>
                <h1>{this.props.user.user_id}</h1>
                <div>
                    <button onClick={() => this.getCards()}>Shuffle</button>
                    <button onClick={()=>this.reset()}>Reset</button>
                </div>

                <div style={{ width: '73%', textAlign: 'center', minHeight: '300px', marginBottom: 10, border: 'black solid 2px' }}>
                    <div><Buttons num={1} deal={this.deal} counting={this.counting}/></div>
                    <div style={{ display: 'flex', width: 800 }}>
                        {player1Hand}
                    </div>
                </div>

                {/* <div style={{ width: '73%', textAlign: 'center', minHeight: '300px', marginBottom: 10, border: 'black solid 2px' }}>
                    <div><Buttons num={2} deal={this.deal} counting={this.counting}/></div>
                    <div style={{ display: 'flex', width: 800 }}>
                        {player2Hand}
                    </div>
                </div>

                <div style={{ width: '73%', textAlign: 'center', minHeight: '300px', marginBottom: 10, border: 'black solid 2px' }}>
                    <div><Buttons num={3} deal={this.deal} counting={this.counting}/></div>
                    <div style={{ display: 'flex', width: 800 }}>
                        {player3Hand}
                    </div>
                </div>

                <div style={{ width: '73%', textAlign: 'center', minHeight: '300px', marginBottom: 10, border: 'black solid 2px' }}>
                    <div><Buttons num={4} deal={this.deal} counting={this.counting}/></div>
                    <div style={{ display: 'flex', width: 800 }}>
                        {player4Hand}
                    </div>
                </div> */}

            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        cards: reduxState.cardsReducer.cards,
        user:reduxState.usersReducer.user
    }
}

export default connect(mapStateToProps)(BlackJack)
