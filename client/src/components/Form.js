import React, { useState } from 'react';
import firebase from "../utils/firebase";

const Form = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submitForm = (e) => {
        e.preventDefault()

        firebase
            .firestore()
            .collection("recipes")
            .add({
                title,
                description,
                timestamp: Date.now()
            })
            .then(() => {
                setTitle("")
                setDescription("")
            })
    }

    return (
        <form
            className="form"
            onSubmit={submitForm}
        >
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.currentTarget.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <input type="text"
                    value={description}
                    onChange={e => setDescription(e.currentTarget.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default Form;