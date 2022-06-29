const app = require("./app.js");

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is runing on port: ${PORT}`);
});
