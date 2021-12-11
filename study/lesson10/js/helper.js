export function saveUserToLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocalStorage() {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

function generatorMessageElement(msg, senderId) {
  return `
    <li class="flex ${msg.senderId === senderId && "justify-end"
    } items-center mb-4">
      <div class="mr-2">
        <img class="w-12 object-cover h-auto rounded-full"
          src="${msg.avatar}" alt="">
        <p class="mt-2 text-xs font-bold text-center">09:00</p>
      </div>
      <div>
        <p class="font-bold mb-2">${msg.creator}</p>
        <p class="py-2 px-4 bg-gray-300 rounded-full">${msg.content}</p>
      </div>
    </li>
  `;
}

export function renderMessages(messages, container, senderId) {
  container.innerHTML = "";
  let messageHtmls = "";
  for (let msg of messages) {
    messageHtmls += generatorMessageElement(msg, senderId);
  }
  container.insertAdjacentHTML("after begin", messageHtmls);
}