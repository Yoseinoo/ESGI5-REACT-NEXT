import { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { getTasks } from "../data/api";
import { useAuthContext } from "../contexts/AuthProvider";

function Tasks() {
    /** Check token */
    const { token } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token);
        if (!token) {
            navigate("/login", { replace: true });
        }
    }, [navigate, token]);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks()
            .then((data) => setTasks(data))
            .catch((error) => console.error("Failed to fetch tasks:", error));
    }, []);

    return (
        <div>
            <ul>
                {tasks.map((t) => (
                    <li key={t.id}>
                        <Link to={t.id}>{t.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
