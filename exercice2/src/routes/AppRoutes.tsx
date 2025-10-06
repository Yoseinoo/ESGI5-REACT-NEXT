import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../components/AppLayout";
import Tasks from "../pages/Tasks";
import TaskDetail from "../components/TaskDetail";
import NotFound from "../components/NotFound";
import Login from "../pages/Login";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                {" "}
                {/* layout global */}
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/tasks/:id" element={<TaskDetail />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
