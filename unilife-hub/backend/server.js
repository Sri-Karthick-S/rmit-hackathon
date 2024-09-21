const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import the db connection
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
// server.js (add to existing file)
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('join', (roomId) => {
    socket.join(roomId);
  });

  socket.on('message', (data) => {
    io.to(data.roomId).emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
dotenv.config(); // Load env variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes); // Include auth routes

const PORT = process.env.PORT || 3000; // Change the port to 3000 or any available port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
