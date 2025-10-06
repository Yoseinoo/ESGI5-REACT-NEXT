import { useEffect, useRef, useState } from "react";
import "./Timer.css";

function Timer() {
    const [intervalMs, setIntervalMs] = useState<number>(1000);
    const [count, setCount] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setCount(0);

        if (intervalRef.current) clearInterval(intervalRef.current);

        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setCount((prev) => prev + 1);
            }, intervalMs);
        }
    }, [isRunning, intervalMs]);

    const toggleTimer = () => setIsRunning((prev) => !prev);

    return (
        <div>
            <input
                type="number"
                value={intervalMs}
                onChange={(e) => setIntervalMs(Number(e.target.value))}
                min={1}
            />
            Tick count: <span>{count}</span>
            <button onClick={toggleTimer}>
                {isRunning ? "Stop" : "Start"}
            </button>
        </div>
    );
}

export default Timer;
