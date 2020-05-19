import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import './session.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/tweets');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
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
                                <img src={logo} alt="" />
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
                            No es un miembro?
                            <a href="#/signup"> Registrate </a>
                        </p>
                    </nav>
                    <main>
                        <div className="auth-content">
                            <h2>Registro</h2>
                            <div className="auth-connections">
                                <a href="" className='form-btn auth-google auth-google-new'>
                                    <i class="fab fa-google"></i>
                                    Iniciar Sesión con Google
                                </a>
                            </div>
                            <hr className="divider"></hr>
                            <div className="auth-form signup-form">
                                <form onSubmit={this.handleSubmit} className='signup' id='new_user'>
                                    <div className="signup-form">
                                        <div className="form-field">
                                            <fieldset className="user_email">
                                                <label htmlFor="user_email">Correo</label>
                                                <input type="text"
                                                    value={this.state.email}
                                                    onChange={this.update('email')}
                                                    className='text-input'
                                                    id='user_email'
                                                />
                                            </fieldset>
                                        </div>

                                        <div className="form-field">
                                            <fieldset className="user_password">
                                                <label htmlFor="user_password">Contraseña</label>
                                                <input type="password"
                                                    value={this.state.password}
                                                    onChange={this.update('password')}
                                                    placeholder="6+ caracteres"
                                                    className='text-input'
                                                    id='user_password'
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="form-btns">
                                            <input type="submit" value="Iniciar Sesión" className='btn form-sub' />
                                        </div>
                                        {this.renderErrors()}
                                    </div>
                                </form>
                            </div>
                        </div>

                    </main>
                </section>

            </div>
            // <div className='main-container'>
            //     <form onSubmit={this.handleSubmit}>
            //         <div>
            //             <input type="text"
            //                 value={this.state.email}
            //                 onChange={this.update('email')}
            //                 placeholder="Email"
            //             />
            //             <br />
            //             <input type="password"
            //                 value={this.state.password}
            //                 onChange={this.update('password')}
            //                 placeholder="Password"
            //             />
            //             <br />
            //             <input type="submit" value="Submit" />
            //             {this.renderErrors()}
            //         </div>
            //     </form>
            // </div>
        );
    }
}

export default withRouter(LoginForm);