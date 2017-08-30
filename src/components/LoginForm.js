import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: "",
      username: ""
    };
  }

  pass = (e) => {
    this.setState({password:e.target.value})
  }

  user = (e) => {
    this.setState({username:e.target.value})
  }

  submit = (e) => {
    e.preventDefault()
    if(this.state.username.legnth > 0 && this.state.password.legnth > 0) { this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.user}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.pass}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
