const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', (message) => {
        console.log(`Received: ${message}`);

        // Check if the message is a known command
        if (message === 'knownCommand') {
            socket.send(`Server: ${message}`);
        } else {
            // Respond with "Unknown Command" for unrecognized messages
            socket.send('Server: OK - ${message}');
        }
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
