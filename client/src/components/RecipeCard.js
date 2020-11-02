import React, { useState, useRef } from 'react';
import firebase from "../utils/firebase";
import moment from "moment";
import ShowMoreText from 'react-show-more-text';
import Popup from 'reactjs-popup';
import { deleteEntry } from "../helpers/functions";

const Card = ({ docID, title, imgSrc, author, description, timestamp, hasMade, notes, tags, url }) => {

    const [tagsToAdd, setTagsToAdd] = useState("");
    const [notesToAdd, setNotesToAdd] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    // const deleteEntry = () => {
    //     firebase
    //         .firestore()
    //         .collection("recipes")
    //         .doc(docID)
    //         .delete()
    // }

    const addTags = (e) => {
        e.preventDefault();
        setIsEditing(false);

        let newTags = tagsToAdd;
        if (newTags.length) {
            if (newTags.length === 1) {
                firebase
                    .firestore()
                    .collection("recipes")
                    .doc(docID)
                    .update({
                        "tags": firebase.firestore.FieldValue.arrayUnion(newTags)
                    })
            } else {
                newTags = newTags.split(",")
                newTags.forEach(tag => {
                    firebase
                        .firestore()
                        .collection("recipes")
                        .doc(docID)
                        .update({
                            "tags": firebase.firestore.FieldValue.arrayUnion(tag)
                        })
                });
            }
            setTagsToAdd("");
        }
    }

    const removeTag = (e) => {
        let tagToRemove = e.target.closest("li").textContent.slice(0, -1);
        firebase
            .firestore()
            .collection("recipes")
            .doc(docID)
            .update({
                "tags": firebase.firestore.FieldValue.arrayRemove(tagToRemove)
            })
    }

    const addNotes = (e) => {
        e.preventDefault()

        let newNotes = notesToAdd.split("\n\n");
        newNotes.forEach(note => {
            firebase
                .firestore()
                .collection("recipes")
                .doc(docID)
                .update({
                    "notes": firebase.firestore.FieldValue.arrayUnion(note)
                })
        });
        setNotesToAdd("");
    }

    const removeNote = (e) => {
        let noteToRemove = e.target.closest("li").textContent.slice(0, -1);
        firebase
            .firestore()
            .collection("recipes")
            .doc(docID)
            .update({
                "notes": firebase.firestore.FieldValue.arrayRemove(noteToRemove)
            })
    }

    const updateHasMade = () => {
        firebase
            .firestore()
            .collection("recipes")
            .doc(docID)
            .update({
                "hasMade": !hasMade
            })
    }

    return (
        <div className="card">
            <div className="card-top">
                <img src={imgSrc} />
                <Popup trigger={<span className="delete"></span>} modal>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>X</button>
                            <div className="header">Are You Sure that You Want to Delete this Recipe???</div>
                            <button className="delete" onClick={() => deleteEntry(docID)}>Delete this Recipe Entry</button>
                        </div>
                    )}
                </Popup>
            </div>
            <div className="card-bottom">
                <div className="title-wrapper">
                    <h3>{title}</h3>
                    <div className="checkbox-wrapper">
                        <input type="checkbox" className="has-made" name="has-made"
                            value={hasMade}
                            onChange={() => console.log("click")}
                            checked={hasMade}
                        />
                        <label
                            htmlFor="has-made"
                            onClick={() => updateHasMade()}
                        >
                            Cooked
                        </label>
                    </div>
                </div>
                <p>Author: <strong><em>{author.length ? author : "No Assigned Author"}</em></strong></p>
                <div className="description">
                    <ShowMoreText
                        lines={5}
                        more='Show more'
                        less='Show less'
                        anchorClass='description-anchor'
                        expanded={false}
                        width={0}
                    >
                        {description}
                    </ShowMoreText>
                </div>
                <div>
                    <div className="tags-header">
                        <p><strong>Tagged As:</strong></p>
                        {isEditing ? (
                            <form
                                onSubmit={e => addTags(e)}
                            >
                                <textarea
                                    name="tags"
                                    placeholder="Enter ',' separated tags"
                                    rows="2"
                                    value={tagsToAdd}
                                    onChange={e => setTagsToAdd(e.target.value)}
                                />
                                <button
                                    type="submit"
                                >{tagsToAdd.length > 0 ? "Submit" : "Close"}</button>
                            </form>
                        ) : (
                                <p className="add" onClick={() => setIsEditing(true)}>+</p>
                            )}
                    </div>
                    {tags.length > 0 ?
                        (
                            <ul className="tags">
                                {tags.map((tag, i) => (
                                    <li
                                        key={docID + i}
                                    >{tag}
                                        <div className="delete-tag" onClick={(e) => removeTag(e)}>
                                            <span>x</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                        : (
                            <p>This recipe has not been tagged yet</p>
                        )
                    }
                </div>
                <div>
                    <Popup trigger={
                        notes.length > 0 ? (
                            <div className="see-notes note">See Notes</div>
                        ) : (
                                <div className="make-notes note">Make a Note</div>
                            )
                    } modal>
                        {close => (
                            <div className="modal notes-modal">
                                <button className="close" onClick={close}>X</button>
                                <div className="header">{title} Notes</div>
                                <div className="content">
                                    {notes.length > 0 ? (
                                        <ol>
                                            {notes.map(note => (
                                                <li
                                                    key={note}
                                                >{note}
                                                    <div className="delete-note" onClick={(e) => removeNote(e)}>
                                                        <span>x</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    ) : (
                                            <p>There are no notes for this recipe yet.</p>
                                        )}
                                </div>
                                <div className="actions">
                                    <form
                                        onSubmit={e => addNotes(e)}
                                    >
                                        <textarea
                                            name="notes"
                                            placeholder="Add additional notes here."
                                            rows="5"
                                            value={notesToAdd}
                                            onChange={e => setNotesToAdd(e.target.value)}
                                        />
                                        <button type="submit">Add Note</button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
                <div className="link">
                    <a href={url} target="_blank">Recipe Link</a>
                </div>
                <span className="timestamp">Saved On: {moment(timestamp).format("MMMM Do YYYY")}</span>
            </div>
        </div>
    );
}

export default Card;