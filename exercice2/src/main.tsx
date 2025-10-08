import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";
import AuthProvider from "./contexts/AuthProvider.tsx";
import { Provider } from "react-redux";
import store from "./stores/store.ts";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    </Provider>
);
