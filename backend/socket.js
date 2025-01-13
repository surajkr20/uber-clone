const { Server } = require('socket.io');
const userModel = require('./model/user.model');
const captainModel = require('./model/captain.Model');

let io;

const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);

    // Event: User or Captain joins
    socket.on('join', async (data) => {
      const { userId, userType } = data; // Extract userId and userType from data
      console.log(`User ${userId} joined as ${userType}`);

      try {
        if (userType === 'user') {
          await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
          console.log(`User ${userId} socket ID updated.`);
        } else if (userType === 'captain') {
          await captainModel.findByIdAndUpdate(userId, { socketId: socket.id }); // Use userId for captains
          console.log(`Captain ${userId} socket ID updated.`);
        } else {
          console.error('Invalid userType provided');
        }
      } catch (error) {
        console.error('Error updating user or captain:', error);
      }
    });

    // Event: Update captain's location
    socket.on('update-location-captain', async (data) => {
      const { userId, location } = data;

      if (!location || !location.ltd || !location.lng) {
        return socket.emit('error', { message: 'Invalid location data' });
      }

      try {
        await captainModel.findByIdAndUpdate(userId, {
          location: {
            ltd: location.ltd,
            lng: location.lng,
          },
        });
        console.log(`Updated location for captain ${userId}.`);
      } catch (error) {
        console.error('Error updating captain location:', error);
      }
    });

    // Event: Client disconnects
    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};

// Helper function to send a message to a specific socket ID
const sendMessageToSocketId = (socketId, messageObject) => {
  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.error('Socket.io is not initialized');
  }
};

module.exports = {
  initializeSocket,
  sendMessageToSocketId,
};
