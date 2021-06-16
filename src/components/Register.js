import React from 'react';
import { withRouter } from 'react-router-dom';
import * as auth from '../utils/auth';
import InfoTooltip from './InfoTooltip';
import success from '../images/success.svg';
import failed from '../images/union.svg';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registered: false,
      email: '',
      password: '',
      confirmPassword: '',
      showModal: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      auth.register(this.state.email, this.state.password).then((res) => {
        if (res) {
          this.setState({ registered: true, showModal: true });
        } else {
          this.setState({ showModal: true });
        }
      });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleClose() {
    if (this.state.showModal && this.state.registered) {
      this.setState({ showModal: false }, () => {
        this.props.history.push('/signin');
      })
    } else {
      this.setState({ showModal: false });
    }
  }

  render() {

    let message;
    let imgSrc;

    if (this.state.showModal && this.state.registered) {
      message = 'Success! You have now been registered.'
      imgSrc = success;
    } else if (this.state.showModal) {
      message = 'Oops, something went wrong! Please try again.'
      imgSrc = failed;
    }

    return (
      <div className="login">
        <p className="login__heading">
          Sign up
        </p>
        <form onSubmit={this.handleSubmit} className="login__form">
          <input required id="email" name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          <input required id="password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          <input id="confirmPassword" name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Confirm Password" required />
          <div className="login__button-container">
            <button type="submit" onSubmit={this.handleSubmit} className="login__button">Sign Up</button>
          </div>
        </form>
        <p className="login__text">Already a member? Log in here!</p>
        {this.state.showModal && <InfoTooltip onClose={this.handleClose} message={message} imgSrc={imgSrc} />}
      </div>
    )
  }
}

export default withRouter(Register);
