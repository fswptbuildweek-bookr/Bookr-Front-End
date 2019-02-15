import React from 'react';

class LogInComponent extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      signUp: false,
      usernameInput:'',
      passwordInput: '',
      passwordInputCheck: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signUpComponentClickHandler = () => {
    this.setState({
      signUp: true
    })
  }

  logInComponentclickHandler = () => {
    this.setState({
      signUp: false
    })
  }
  render(){
    const signUp = this.state.signUp;
    return(
      <div>
        { !signUp ? (
          <div>
            <label> USERNAME</label><br/>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="usernameInput"
              value={this.state.usernameInput}
             /><br/>
            <label> Password</label><br/>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="passwordInput"
              value={this.state.passwordInput} /><br/>
            <button> Log In </button>
            <p> No account? Sign up <button onClick={this.signUpComponentClickHandler}> Here </button></p>
          </div>
        ) : (
          <div>
            <label> USERNAME</label><br/>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="usernameInput"
              value={this.state.usernameInput}
             /><br/>
            <label> Password</label><br/>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="passwordInput"
              value={this.state.passwordInput} /><br/>
            <label> Password</label><br/>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="passwordInputCheck"
              value={this.state.passwordInputCheck} /><br/>
            <button> SignUp </button>
            <p> Already have an account? Log In <button onClick={this.logInComponentclickHandler}> Here </button></p>
          </div>
        )}
      </div>
    )
  }
}

export default LogInComponent;
