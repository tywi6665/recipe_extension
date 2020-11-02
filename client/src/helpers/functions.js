import firebase from "../utils/firebase";

export function create(args) {
    firebase
        .firestore()
        .collection("recipes")
        .add(...args)
}

export function deleteEntry(id) {
    firebase
        .firestore()
        .collection("recipes")
        .doc(id)
        .delete()
}
