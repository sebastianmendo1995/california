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

    handleType(type) {
        return (e) => {
            if (Number(e.currentTarget.value) || e.currentTarget.value === "") {
                this.setState({
                    [type]: e.currentTarget.value
                })
            }
        }
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
                            Cuenta con una cuenta?
                            <a href="#/login"> Inicie Sesion </a>
                        </p>
                    </nav>
                    <main>
                        <div className="auth-content">
                            <h2>Registro</h2>
                            <div className="auth-connections">
                                <a href="" className='form-btn auth-google auth-google-new'>
                                    <i class="fab fa-google"></i> 
                                    Registrarse con Google
                                </a>
                            </div>
                            <hr className="divider"></hr>
                            <div className="auth-form signup-form">
                                <form onSubmit={this.handleSubmit} className='signup' id='new_user'>
                                    <div className="signup-form">
                                        <div className="form-field-group">
                                            <div className="form-field">
                                                <fieldset className="user_phone">
                                                    <label htmlFor="user_phone">Teléfono</label>
                                                    <input type="text"
                                                        value={this.state.phone}
                                                        //onChange={this.update('phone')}
                                                        onChange={this.handleType('phone')}
                                                        className='text-input'
                                                        id='user_phone'
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="form-field">
                                                <fieldset className="user_nationality">
                                                    <label htmlFor="user_nationality">Nacionalidad</label>
                                                    <input type="text"
                                                        value={this.state.nationality}
                                                        onChange={this.update('nationality')}
                                                        className='text-input'
                                                        id='user_nationality'
                                                    />
                                                </fieldset>
                                            </div>
                                        </div>
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
                                        <div className="form-field">
                                            <fieldset className="user_password2">
                                                <label htmlFor="user_password2">Confirmar Contraseña</label>
                                                <input type="password"
                                                    value={this.state.password2}
                                                    onChange={this.update('password2')}
                                                    id='user_password2'
                                                />
                                            </fieldset>
                                        </div>

                                        <div class="form-field check-wrap opt-in">
                                            <fieldset>
                                                <input type="checkbox" id="user_agree_to_terms" name="user[agree_to_terms]" />
                                                <label for="user_agree_to_terms">
                                                        Creating an account means you’re okay with our
                                                        <a target="_blank" href="#/terms"> Terms of Service</a>,
                                                        <a target="_blank" href="#/privacy"> Privacy Policy</a>, and our default
                                                        <a target="_blank" href="#/notifications"> Notification Settings</a>.
                                                </label>
                                            </fieldset>
                                        </div>
                                        <div className="form-btns">
                                            <input type="submit" value="Crear Cuenta" className='btn form-sub'/>
                                        </div>
                                        {this.renderErrors()}
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </main>
                </section>
                
            </div>
        );
    }
}

export default withRouter(SignupForm);