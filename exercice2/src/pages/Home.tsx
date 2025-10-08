import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../stores/features/counterSlice";

function Home() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Page d'accueil</h1>
            <div>
                <div>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <button
                        aria-label="Reset"
                        onClick={() => dispatch(reset())}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
