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
    console.log(text, username, instruction);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ text, username, instruction }));
      }
    });
  });
});

server.listen(3001, () => {
  console.log("Server started on port 3001");
});
