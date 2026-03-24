const Queue = require("bull");
const emailQueue = new Queue("email");

emailQueue.add({
  to: user.email,
  subject: "Welcome",
});


