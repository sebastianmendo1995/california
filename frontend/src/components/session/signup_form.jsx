import React from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../assets/images/logo.png'
// import artwork from '../assets/images/artwork.jpg'
import './session.css'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            nationality: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            phone: this.state.phone,
            nationality: this.state.nationality,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div id="main-container">
                <section className="auth-sidebar">
                    <div className="auth-sidebar-content">
                        <header>
                            <a href="/" className='logo'>
                                <img src={logo} alt=""/>
                            </a>
                            <h1>Hospedarse en Lima nunca fue tan barato.</h1>
                        </header>
                        <div className="artwork">
                            <div className="artwork-image"></div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <nav className="auth-nav">
                        <p className="auth-link">
                            Already a member?
                            <a href="#/login">Log in</a>
                        </p>
                    </nav>
                    <main>
                        <div className="auth-content">
                            <h2>Sign up</h2>
                            <div className="auth-connections">
                                <a href=""></a>
                            </div>
                        </div>
                    </main>
                </section>
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="text"
                            value={this.state.phone}
                            onChange={this.update('phone')}
                            placeholder="Phone"
                        />
                        <br />
                        <input type="text"
                            value={this.state.nationality}
                            onChange={this.update('nationality')}
                            placeholder="Nationality"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);