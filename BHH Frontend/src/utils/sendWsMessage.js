const sendWsMessage = (socket, dataCollection, username, instruction) => {
  let formattedData = JSON.stringify({
    ...dataCollection,
    username,
    instruction,
  });
  socket.send(formattedData);
};

export default sendWsMessage;

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
