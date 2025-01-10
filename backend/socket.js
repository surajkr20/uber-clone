const { Server } = require('socket.io');
const userModel = require('./model/user.model');
const captainModel = require('./model/captain.Model');

let io;

const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);

    socket.on('join', async (data)=>{
        const { userId, userType} = data;
        if(userType === 'user'){
            await userModel.findByIdAndUpdate(userId, {socketId: socket.id});
        }else if(userType === 'captain'){
            await captainModel.findByIdAndUpdate(captainId, {socketId: socket.id});
        }
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};

const sendMessageToSocketId = (socketId, message) => {
  if (io) {
    io.to(socketId).emit('message', message);
  } else {
    console.error('Socket.io is not initialized');
  }
};

module.exports = {
  initializeSocket,
  sendMessageToSocketId
};