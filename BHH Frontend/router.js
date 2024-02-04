const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const clients = [];

/* Message */

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    // buffer
    // clean data
    const { text, username, instruction } = JSON.parse(message);
    if (!text) console.log({ text, username, instruction });
    if (instruction === "doConnect") {
      if (clients.includes(username)) {
        relayTakenUsername(ws, username);
      } else {
        addClientAndRelay({ username, text, instruction });
      }
    } else if (instruction === "sendMessage") {
      console.log({ text, username, instruction });
      relayToClients({ username, text, instruction, isUserTaken: true });
    } else {
      console.log("Instruction not recongnised");
    }
  });
});

function relayTakenUsername(ws, username) {
  const instruction = "userTaken";
  ws.send(JSON.stringify({ username, instruction, isUserTaken: true }));
}

function addClientAndRelay(data) {
  clients.push(data.username);
  relayToClients(data);
}

function relayToClients(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

server.listen(3001, () => {
  console.log("Server started on port 3001");
});
