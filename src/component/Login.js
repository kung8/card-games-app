import React , {Component} from 'react'
import axios from 'axios';
import {saveUser} from '../ducks/reducers/usersReducer'
import {connect} from 'react-redux'

class Login extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }

    login=async()=>{
        const {username,password} = this.state
        if(username !='' && password != ''){
            axios.post('/api/login',{username,password})
            .then(user =>{
                console.log(user)
                this.props.saveUser(user.data[0])
                if(user.status===200){return this.props.history.push('/dash')}
            })
            .catch((err)=>{
                alert(err)
                this.setState({username:'',password:''})
            })
        } else {
            alert('Please enter a username and password!')
        }
    }

    register=async()=>{
        const {username,password} = this.state
        if(username != '' && password != ''){
            let user = await axios.post('/api/register',{username,password})
            console.log(user.data)
            user = user.data[0]
            if(user){
                this.props.saveUser(user)
                this.props.history.push('/dash')
            } else {
                alert('Username has been taken')
            }
        }
    }

    render(){
        return(
            <div>
                <input value={this.state.username} onChange={e=>this.setState({username:e.target.value})}/>
                <input value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default connect(null, {saveUser})(Login)