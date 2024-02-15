const io = require("socket.io")(3000, {
  cors: {
    origin: "http://127.0.0.1:5500", // Specify the client origin explicitly
    methods: ["GET", "POST"], // Allow only these methods
    allowedHeaders: ["my-custom-header"], // If you use custom headers, specify them here
    credentials: true, // If your client needs to send cookies or credentials with the request
  },
});

io.on("connection", (socket) => {
  socket.on("send-chat-message", message => {
    socket.broadcast.emit("chat-message", message);
  });
});
