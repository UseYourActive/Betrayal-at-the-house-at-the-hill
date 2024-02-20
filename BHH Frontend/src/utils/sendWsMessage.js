const sendWsMessage = (socket, dataCollection, username, instruction) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    let formattedData = JSON.stringify({
      ...dataCollection,
      username,
      instruction,
    });
    socket.send(formattedData);
  }
};

const sendLoginWsMessage = (socket, username) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    let formattedData = JSON.stringify({
      username,
      instruction: "doConnect",
      text: " joined the chat.",
    });
    socket.send(formattedData);
  }
};

export { sendWsMessage, sendLoginWsMessage };

/*       
                  if (text === "") {
                    alert("Enter not null message, LUL/");
                  } else {
                    let messageToSend = {
                      username,
                      text,
                      instruction: "sendMessage",
                    };
                    if (!messages.includes(messageToSend)) {
                      sendInstruction(messageToSend);
                      messageInputRef.current.value = "";
                    }
                  }
                }*/
