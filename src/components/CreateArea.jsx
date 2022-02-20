import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function valtozas(e) {
        const { name, value } = e.target;
        setNote({
            ...note,
            [name]: value
        });
    }
    function elkuldes(e) {
        props.atad(note);
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }
    return (
        <form>
            <input
                type="text"
                name="title"
                placeholder="Cím"
                onChange={valtozas}
                value={note.title}
            />
            <textarea
                name="content"
                placeholder="Jegyzet"
                rows="3" 
                onChange={valtozas}
                value={note.content}
            />
            <button onClick={elkuldes}>+</button>
        </form>
    )
}

export default CreateArea;