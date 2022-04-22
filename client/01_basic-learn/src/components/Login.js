import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    // save dataType
    saveFormData = (dataType, value) => {
            this.setState({[dataType]: value})
        }
    
    handleSubmit = (event) => {
        // get ref of the username
        event.preventDefault()
        const {username, password} = this.state
        alert(`输入的用户名是：${username}, 密码是：${password}`)
    }

    render() {
        return (
            <form aciton="http://google.com" onSubmit={this.handleSubmit}>
                用户名：<input onBlur={event => this.saveFormData("username", event.target.value)} type="text" name="username"/>
                密码：  <input onBlur={event => this.saveFormData("password", event.target.value)} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

Login.propTypes = {
}

Login.defaultProps = {
}

export default Login