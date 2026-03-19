function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value;
  if (!userText) return;

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = userText;
  chatBox.appendChild(userMsg);

  // Fake AI response (for now)
  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.innerText = "🤖 Thinking... (AI will come later)";
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}