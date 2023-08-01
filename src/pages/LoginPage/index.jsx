import React, { useState, useContext } from "react";
import "./style.css"

import { AuthContext } from "../../contexts/auth";

const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const  handleLogin = async () => {
        console.log('email', email);
        console.log('password', password);
        login(email, password);
    }

    return (
        <div className="container">
        
            <div className="box">
                <div className="title">Login</div>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value) }
                    />
                
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value) }
                    />
                    <div className="actions">
                        <button onClick={handleLogin}>Entrar</button>
                    </div>
                </div>

            </div>
        </div>
    )
    
}

export default LoginPage;