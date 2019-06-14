import React , {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Header extends Component {
    logout=()=>{
        axios.post('/api/logout')
        this.props.history.push('/')
    }

    render(){
        return(
            <div style={{height:100}}>
                {this.props.history.location.pathname !== '/' && <button onClick={this.logout}>Logout</button>}
            </div>
        )
    }
}
export default withRouter(Header)