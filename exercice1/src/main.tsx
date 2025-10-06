import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Hello from "./components/hello/Hello.tsx";
import Counter from "./components/counter/Counter.tsx";
import Timer from "./components/timer/Timer.tsx";
import Recherche from "./components/recherche/Recherche.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Recherche />
    </StrictMode>
);
