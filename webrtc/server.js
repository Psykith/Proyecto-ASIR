const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let clients = new Map();

wss.on('connection', (ws) => {
  const id = generateUniqueId();
  clients.set(id, ws);

  ws.on('message', (message) => {
    // Se espera que el mensaje tenga destino para reenviar
    const data = JSON.parse(message);
    const dest = clients.get(data.destId);
    if (dest) {
      dest.send(JSON.stringify({ from: id, ...data }));
    }
  });

  ws.on('close', () => {
    clients.delete(id);
  });
});

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}
