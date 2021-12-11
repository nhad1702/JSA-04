import { renderMessages } from "./helper.js";
import { mockData } from "./mockData.js";

const urlParams = new URLSearchParams(window.location.search);
const senderId = urlParams.get("uid");
console.log(senderId);

const msgContainer = document.getElementById("msgContainer");
renderMessages(mockData, msgContainer);
