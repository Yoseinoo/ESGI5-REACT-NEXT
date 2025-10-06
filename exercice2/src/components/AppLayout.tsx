import { Link, NavLink, Outlet } from "react-router-dom";

function AppLayout() {
    const active = ({ isActive }: { isActive: boolean }) => ({
        textDecoration: isActive ? "underline" : "none",
    });

    return (
        <div>
            <header>
                <Link to="https://react.dev">React Documentation</Link>
                <nav>
                    <NavLink to="/" style={active} end>
                        Accueil
                    </NavLink>
                    <NavLink to="/tasks" style={active}>
                        Tâches
                    </NavLink>
                    <NavLink to="/login" style={active}>
                        Se connecter
                    </NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AppLayout;
