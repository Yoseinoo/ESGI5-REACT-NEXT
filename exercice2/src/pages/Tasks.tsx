import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks } from "../data/api";

function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks()
            .then((data) => setTasks(data))
            .catch((error) => console.error("Failed to fetch tasks:", error));
    }, [])

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
