import { useState } from "react";
import { login as apilogin } from "../data/api";
import { setToken } from "../contexts/AuthContext";

function Login() {
    const [email, setEmail] = useState("student@example.com");
    const [password, setPassword] = useState("password");
    const login = () => {
        apilogin(email, password)
        .then((data) =>  {
            console.log(data.token);
            setToken(data.token);
        })
        .catch((error) => console.error("Failed to login:", error));
    }

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={login}>Se connecter</button>
        </div>
    );
}

export default Login;
