import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { handleCards } from '../../ducks/reducers/cardReducer'
import { connect } from 'react-redux'
import BlackJack from './BlackJack'

// function Cards(props) {
//     const [cards, setCards] = useState([])
//     const [player1, setPlayer1] = useState([])
//     const [player2, setPlayer2] = useState([])
//     const [player3, setPlayer3] = useState([])
//     const [player4, setPlayer4] = useState([])

//     useEffect(() => {
//         axios.get('/api/getcards').then(res => {
//             setCards(res.data) 
//             handleCards(res.data)
//         })
//     }, [])

//     return (
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//             {cards.map(card => {
//                 let suit
//                 if (card.suit === 'heart') {
//                     suit = "far fa-heart"
//                 } else if (card.suit === 'diamond') {
//                     suit = "far fa-gem"
//                 } else if (card.suit === 'spade') {
//                     suit = "fas fa-spa"
//                 } else if (card.suit === 'club') {
//                     suit = "fab fa-canadian-maple-leaf"
//                 }

//                 let suitRepeat
//                 if (card.value == 'K') {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250 }}>

//                             <h1>
//                                 <i class="fas fa-crown"></i>
//                             </h1>

//                         </div>
//                     )
//                 } else if (card.value == 'Q') {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250 }}>
//                             <h1>
//                                 <i className="fas fa-chess-queen" />
//                             </h1>
//                         </div>
//                     )
//                 } else if (card.value == 'J') {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250 }}>
//                             <h1>
//                                 <i class="fas fa-chess-pawn"></i>
//                             </h1>
//                         </div>
//                     )
//                 } else if (+card.value == '10') {
//                     suitRepeat =
//                         (<div style={{ display: 'flex', width: 100, height: 250 }}>
//                             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                             <div style={{
//                                 display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'
//                             }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                         </div>)
//                 } else if (+card.value === 9) {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', width: 100, height: 250 }}>
//                             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                             <div style={{
//                                 display: 'flex', alignItems: 'center'
//                             }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                         </div>)
//                 } else if (+card.value === 8) {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', justifyContent: 'space-between', height: 250, width: 100, flexDirection: 'column', alignItems: 'center' }}>
//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginTop: 30 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>

//                             <div>
//                                 <h1 style={{ margin: 0, }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>

//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>

//                             <div>
//                                 <h1 style={{ margin: 0, }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>

//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginBottom: 30 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                         </div>)
//                 } else if (+card.value === 7) {
//                     suitRepeat = (
//                         <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: 120, height: 250, justifyContent: 'space-between' }}>

//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginTop: 30 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>

//                             <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: 65, left: 45 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>

//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginBottom: 30 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                         </div>
//                     )
//                 } else if (+card.value === 6) {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', justifyContent: 'space-between', height: 250, width: 120, flexDirection: 'column' }}>
//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginTop: 30 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>

//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>

//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginBottom: 30 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                         </div>
//                     )
//                 } else if (+card.value === 5) {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', flexDirection: 'column', width: 100, height: 250, justifyContent: 'space-evenly', alignItems: 'center' }}>
//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                             <div>
//                                 <h1 style={{ margin: 0, }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                         </div>
//                     )
//                 } else if (+card.value === 4) {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', justifyContent: 'space-between', height: 250, width: 120, flexDirection: 'column' }}>
//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginTop: 30 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                             <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginBottom: 30 }}>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                                 <h1 style={{ margin: 0 }}>
//                                     <i className={suit} />
//                                 </h1>
//                             </div>
//                         </div>
//                     )
//                 } else if (+card.value === 3) {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', flexDirection: 'column', height: 250, justifyContent: 'space-evenly' }}>
//                             <h1 style={{ margin: 0 }}>
//                                 <i className={suit} />
//                             </h1>
//                             <h1 style={{ margin: 0 }}>
//                                 <i className={suit} />
//                             </h1>
//                             <h1 style={{ margin: 0 }}>
//                                 <i className={suit} />
//                             </h1>
//                         </div>
//                     )
//                 } else if (+card.value === 2) {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', flexDirection: 'column', height: 250, justifyContent: 'space-evenly' }}>
//                             <h1 style={{ marginTop: '-30px' }}>
//                                 <i className={suit} />
//                             </h1>
//                             <h1 style={{ marginBottom: '-30px' }}>
//                                 <i className={suit} />
//                             </h1>
//                         </div>
//                     )
//                 } else if (card.value === 'A') {
//                     suitRepeat = (
//                         <div style={{ display: 'flex', flexDirection: 'column', height: 250, justifyContent: 'center' }}>
//                             <h1 style={{ margin: 0 }}>
//                                 <i className={suit} />
//                             </h1>
//                         </div>
//                     )
//                 }

//                 return (
//                     <div key={card.card_id} style={{ position: 'relative', color: card.color, borderRadius: '16px', display: 'flex', border: 'solid black 1px', margin: '5px', height: '250px', width: '200px', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
//                         <div style={{ display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'space-between', position: 'absolute', left: 5, top: 5, alignItems: 'center' }}>
//                             <h1 style={{ margin: 0 }}>{card.value}</h1>
//                             <i style={{ margin: 0 }} className={suit} />
//                         </div>

//                         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                             {suitRepeat}
//                         </div>

//                         <div style={{ display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'space-between', position: 'absolute', right: 5, bottom: 5, alignItems: 'center' }}>
//                             <i className={suit} />
//                             <h1 style={{ margin: 0 }}>{card.value}</h1>
//                         </div>
//                     </div>)
//             })}
//             <BlackJack/>
//         </div>
//     )
// }

// export default connect(null,{handleCards})(Cards)

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
        // const {cards} = this.state
        // const sorted = cards.sort((a,b)=>Math.floor(Math.random()*cards.length))
        // console.log(this.state.cards[0])
        // const mappedCards = this.state.cards.map(card => {
        //     let suit
        //     if (card.suit === 'heart') {
        //         suit = "far fa-heart"
        //     } else if (card.suit === 'diamond') {
        //         suit = "far fa-gem"
        //     } else if (card.suit === 'spade') {
        //         suit = "fas fa-spa"
        //     } else if (card.suit === 'club') {
        //         suit = "fab fa-canadian-maple-leaf"
        //     }

        //     let suitRepeat
        //     if (card.value == 'K') {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250 }}>

        //                 <h1>
        //                     <i class="fas fa-crown"></i>
        //                 </h1>

        //             </div>
        //         )
        //     } else if (card.value == 'Q') {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250 }}>
        //                 <h1>
        //                     <i className="fas fa-chess-queen" />
        //                 </h1>
        //             </div>
        //         )
        //     } else if (card.value == 'J') {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250 }}>
        //                 <h1>
        //                     <i class="fas fa-chess-pawn"></i>
        //                 </h1>
        //             </div>
        //         )
        //     } else if (+card.value == '10') {
        //         suitRepeat =
        //             (<div style={{ display: 'flex', width: 100, height: 250 }}>
        //                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //                 <div style={{
        //                     display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'
        //                 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //             </div>)
        //     } else if (+card.value === 9) {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', width: 100, height: 250 }}>
        //                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //                 <div style={{
        //                     display: 'flex', alignItems: 'center'
        //                 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //             </div>)
        //     } else if (+card.value === 8) {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', justifyContent: 'space-between', height: 250, width: 100, flexDirection: 'column', alignItems: 'center' }}>
        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginTop: 30 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>

        //                 <div>
        //                     <h1 style={{ margin: 0, }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>

        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>

        //                 <div>
        //                     <h1 style={{ margin: 0, }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>

        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginBottom: 30 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //             </div>)
        //     } else if (+card.value === 7) {
        //         suitRepeat = (
        //             <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: 120, height: 250, justifyContent: 'space-between' }}>

        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginTop: 30 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>

        //                 <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: 65, left: 45 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>

        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginBottom: 30 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //             </div>
        //         )
        //     } else if (+card.value === 6) {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', justifyContent: 'space-between', height: 250, width: 120, flexDirection: 'column' }}>
        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginTop: 30 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>

        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>

        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginBottom: 30 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //             </div>
        //         )
        //     } else if (+card.value === 5) {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', flexDirection: 'column', width: 100, height: 250, justifyContent: 'space-evenly', alignItems: 'center' }}>
        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //                 <div>
        //                     <h1 style={{ margin: 0, }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //             </div>
        //         )
        //     } else if (+card.value === 4) {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', justifyContent: 'space-between', height: 250, width: 120, flexDirection: 'column' }}>
        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginTop: 30 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //                 <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 120, marginBottom: 30 }}>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                     <h1 style={{ margin: 0 }}>
        //                         <i className={suit} />
        //                     </h1>
        //                 </div>
        //             </div>
        //         )
        //     } else if (+card.value === 3) {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', flexDirection: 'column', height: 250, justifyContent: 'space-evenly' }}>
        //                 <h1 style={{ margin: 0 }}>
        //                     <i className={suit} />
        //                 </h1>
        //                 <h1 style={{ margin: 0 }}>
        //                     <i className={suit} />
        //                 </h1>
        //                 <h1 style={{ margin: 0 }}>
        //                     <i className={suit} />
        //                 </h1>
        //             </div>
        //         )
        //     } else if (+card.value === 2) {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', flexDirection: 'column', height: 250, justifyContent: 'space-evenly' }}>
        //                 <h1 style={{ marginTop: '-30px' }}>
        //                     <i className={suit} />
        //                 </h1>
        //                 <h1 style={{ marginBottom: '-30px' }}>
        //                     <i className={suit} />
        //                 </h1>
        //             </div>
        //         )
        //     } else if (card.value === 'A') {
        //         suitRepeat = (
        //             <div style={{ display: 'flex', flexDirection: 'column', height: 250, justifyContent: 'center' }}>
        //                 <h1 style={{ margin: 0 }}>
        //                     <i className={suit} />
        //                 </h1>
        //             </div>
        //         )
        //     }

        //     return (
        //         <div key={card.card_id} style={{ position: 'relative', color: card.color, borderRadius: '16px', display: 'flex', border: 'solid black 1px', margin: '5px', height: '250px', width: '200px', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        //             <div style={{ display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'space-between', position: 'absolute', left: 5, top: 5, alignItems: 'center' }}>
        //                 <h1 style={{ margin: 0 }}>{card.value}</h1>
        //                 <i style={{ margin: 0 }} className={suit} />
        //             </div>

        //             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        //                 {suitRepeat}
        //             </div>

        //             <div style={{ display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'space-between', position: 'absolute', right: 5, bottom: 5, alignItems: 'center' }}>
        //                 <i className={suit} />
        //                 <h1 style={{ margin: 0 }}>{card.value}</h1>
        //             </div>
        //         </div>)
        // })
        return (
            <div>
                {/* {mappedCards} */}
                <BlackJack/>
            </div>
        )
    }

}

function mapStateToProps(reduxState){
    return{
        cards:reduxState.cards
    }
}

export default connect(mapStateToProps,{handleCards})(Cards)