import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Mock Login Logic
        if (username === 'user' && password === 'password'){
            navigate('/quiz');
        }
        else{
            alert("Invalid Login Credentials");
        }
    };
    return(
        <div>
            <h1>Welcome to our Quiz App</h1>
            <p>Test your knowledge and challenge yourself with our Quiz</p>

        <div>
        
        <input 
        type= "text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <input 
        type= "password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}> Login </button>

        </div>
        </div>

    
    );
}
export default Home;
