import { Link } from "react-router-dom";

function Tasks() {
    const tasks = [
        { id: "1", title: "Lire la doc React" },
        { id: "2", title: "Installer React Router" },
    ];
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
