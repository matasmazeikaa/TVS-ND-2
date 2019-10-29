import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            error: null,
        };
    }

    ani = () => {
        document.getElementById('plane').className = 'animation'
    }

    anitwo = () => {
        document.getElementById('bg').className = 'animation2'
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendData = () => {
        if (!this.state.username || !this.state.password) {
            this.setState({error: 'credentials missing'})
            return;
        }
        this.ani()
        this.anitwo();
        Axios.post('http://localhost:3002/post', {
            username: this.state.username,
            password: this.state.password
        })
        this.setState({username: '', password: '', error: ''})
    }

    render() {
        return (
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="Wrapper">
                    <h1 className="Title">Please, log in</h1>
                    <div className="Input">
                        <input onChange={this.handleInputs} name='username' style={{ marginBottom: 10 }} type="text" className="Input-text" placeholder="Username" />
                        <input onChange={this.handleInputs} name='password' type="password" className="Input-text" placeholder="Password" />
                    </div>
                </div>

                <div className="container">
                    <button className="btn btn-inside btn-boarder">
                        <img src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png" style={{ width: "64px", height: '64px' }} id="plane" alt='sfds' />
                    </button>
                    <div className="bg"><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" style={{ width: '32px', height: '32px', opacity: 0 }} id="bg" alt="yup" /></div>
                    <div 
                    className="around around-boarder" 
                    onClick={this.sendData}
                    >
                    </div>
                </div>
            </div>
        );
    }
}

export default App;