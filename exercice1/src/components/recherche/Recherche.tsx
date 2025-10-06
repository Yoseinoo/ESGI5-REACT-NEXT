import { useEffect, useState } from "react";
import "./Recherche.css";

function Recherche() {
    const items = Array.from(
        { length: 2000 },
        (_, index) => `item ${index + 1}`
    );
    const [filterString, setFilterString] = useState("");
    const [filteredList, setFilteredList] = useState<string[]>([]);

    useEffect(() => {
        setFilteredList(
            items.filter((item) => item.toLowerCase().includes(filterString.toLowerCase()))
        );
    }, [filterString, items]);

    return (
        <div>
            <input
                type="string"
                value={filterString}
                onChange={(e) => setFilterString(e.target.value)}
            />
            <ul>
                {filteredList.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default Recherche;
