import {
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import { saveUserToLocalStorage, getUserFromLocalStorage } from "./helper.js";

const logInGoogleAccountButton = document.getElementById("logInGoogleAccount");
const auth = getAuth();

function signInWithGoogleAccount() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            saveUserToLocalStorage(user);
            window.location.href = `./chat.html`;
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

function onAuthenticationListener(user) {
    if (user) {
        window.location.href = `./chat.html`;
    }
}

logInGoogleAccountButton.addEventListener("click", signInWithGoogleAccount);

onAuthStateChanged(auth, onAuthenticationListener);

const currentUser = getUserFromLocalStorage();
console.log(currentUser);

if (currentUser) {
    console.log("Login");
    window.location.href = `./chat.html?uid=${currentUser.uid}`;
}