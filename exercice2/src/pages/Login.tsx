import { useState } from "react";
import { useAuthContext } from "../contexts/AuthProvider";

function Login() {

    const { login } = useAuthContext();
    const [email, setEmail] = useState("student@example.com");
    const [password, setPassword] = useState("password");

    const clickLogin = async () => {
        await login(email, password);
    }

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={clickLogin}>Se connecter</button>
        </div>
    );
}

export default Login;
