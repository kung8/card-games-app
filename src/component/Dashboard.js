import React , {Component} from 'react'
import BlackJack from './games/BlackJack'

export default class Dashboard extends Component {
    render(){
        return(
            <div>
                <BlackJack/>
            </div>
        )
    }
}