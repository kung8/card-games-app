import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import {saveUser} from '../../ducks/reducers/usersReducer'

class Button extends Component {
    constructor() {
        super()
        this.state = {
            isJoined: false,
            id:0
        }
    }

    componentDidMount(){
        this.current()
    }

    current=()=>{
        axios.get('/api/currentUser').then(res=>{
            console.log(res)
            this.props.saveUser(res.data[0])
        })
    }

    toggleJoin = () => {
        this.setState({
            isJoined: true
        })
        this.props.counting(this.props.user.user_id)
    }

    render() {
        return (
            <div>
                {this.props.user.username}
                {this.state.isJoined ?
                    <div>
                        <button onClick={() => this.props.deal(this.props.num)}>Hit Me</button>
                        <button>Pass</button>
                    </div> :
                    <button onClick={this.toggleJoin}>Join</button>}
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

export default connect(mapStateToProps,{saveUser})(Button)