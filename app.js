import { db } from "./firebase.js";
import { collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const messagesDiv = document.getElementById("messages");

const ref = collection(db, "chat");

// recevoir messages en direct
onSnapshot(ref, (snap) => {
  messagesDiv.innerHTML = "";
  snap.forEach(doc => {
    const data = doc.data();
    const div = document.createElement("div");
    div.textContent = data.text;
    messagesDiv.appendChild(div);
  });
});

// envoyer message
window.send = async function () {
  const input = document.getElementById("msg");

  if (!input.value.trim()) return;

  await addDoc(ref, {
    text: input.value,
    time: Date.now()
  });

  input.value = "";
};