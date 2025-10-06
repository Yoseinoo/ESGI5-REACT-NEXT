import { useParams, useSearchParams } from "react-router-dom";

function TaskDetail() {

    const params = useParams();
    const id = params.id;

    const [searchParams, setSearchParams] = useSearchParams();
    const updateSearchParams = (value: string) => {
        setSearchParams({ title: value })
    }

    return (
        <>
            <h1>Voici la tâche n°{id} avec le titre : {searchParams.get("title") ?? "inconnu"}</h1>

            <p>Search param "title" = </p>
            <input type="text" value={searchParams.get("title") ?? ""} onChange={(e) => updateSearchParams(e.target.value)} />
        </>
    );
}

export default TaskDetail;
