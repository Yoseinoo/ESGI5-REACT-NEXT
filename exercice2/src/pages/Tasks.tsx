import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTask, getTasks } from "../data/api";
import { useAuthContext } from "../contexts/AuthProvider";

function Tasks() {
    /** Check token */
    const { token } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        //console.log(token);
        if (!token) {
            navigate("/login", { replace: true });
        }
    }, [navigate, token]);

    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState("");

    useEffect(() => {
        getTasks()
            .then((data) => setTasks(data))
            .catch((error) => console.error("Failed to fetch tasks:", error));
    }, []);

    const newTask = () => {
        createTask(taskTitle, token)
            .then((data) => console.log(data))
            .catch((error) => console.error("Failed to fetch tasks:", error));
    }

    return (
        <div>
            <ul>
                {tasks.map((t) => (
                    <li key={t.id}>
                        <Link to={"/tasks/" + t.id + "?title=" + t.title}>{t.title}</Link>
                    </li>
                ))}
            </ul>

            <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
            <button onClick={newTask}>create task</button>
        </div>
    );
}

export default Tasks;
