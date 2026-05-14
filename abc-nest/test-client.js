// test-client.js - Script đơn giản để test WebSocket server
const io = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');

  // Gửi dữ liệu đến server
  socket.emit('message', { data: 'Hello from client!', timestamp: new Date() });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
