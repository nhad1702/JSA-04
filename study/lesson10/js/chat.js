import {
    getAuth,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    getDoc,
    doc,
    getDocs,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

const db = getFirestore();
const messageRef = collection(db, "messages");

import { renderMessages, getUserFromLocalStorage } from "./helper.js";
import { saveMessageToCollection } from "./firebase-helper.js";
// import { mockData } from "./mockData.js";

const auth = getAuth();

const currentUser = getUserFromLocalStorage();
const senderId = currentUser.uid;

const msgContainer = document.getElementById("msgContainer");

function subcribeMessages() {
    onSnapshot(messageRef, (docs) => {
        let messageData = [];
        docs.forEach((doc) => {
            console.log(doc.data());
            messageData.push(doc.data());
        });
        messageData.sort((a, b) => a.createdAt - b.createdAt);
        renderMessages(messageData, msgContainer, senderId);
    });
}

subcribeMessages();

const logout = document.getElementById("logout");
const myForm = document.getElementById("myForm");

logout.addEventListener("click", () => {
    signOut(auth);
    window.location.href = "./index.html";
});

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newMsg = {
        avatar: currentUser.photoURL,
        content: e.target.messageValue.value,
        createdAt: new Date().valueOf(),
        creator: currentUser.displayName,
        senderId: senderId,
    };
    saveMessageToCollection(newMsg);
    e.target.messageValue.value = "";
});