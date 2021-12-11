import {
    getFirestore,
    addDoc,
    collection,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

const db = getFirestore();
const messageRef = collection(db, "messages");

export function saveMessageToCollection(msg) {
    addDoc(messageRef, msg);
}

// Doc document nay: https://firebase.google.com/docs/firestore/query-data/listen