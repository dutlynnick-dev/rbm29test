function send() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chat");

  if (!input.value.trim()) return;

  const msg = document.createElement("div");
  msg.textContent = "Vous: " + input.value;

  chat.appendChild(msg);
  input.value = "";
}