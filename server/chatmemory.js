
let messages = [];

export function addMessage(role, content) {
  messages.push({ role, content,});
  console.log(messages)
}

export function getMessages() {
  return messages;
}