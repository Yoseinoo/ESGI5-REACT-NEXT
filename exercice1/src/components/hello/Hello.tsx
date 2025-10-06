import "./Hello.css";

function Hello({ content }: { content: string }) {
    return (
        <div>
            Hello {content} !
        </div>
    );
}

export default Hello;
