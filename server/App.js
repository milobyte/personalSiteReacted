
const express = require("express");
const path = require('path');
const app = express();

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});
app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

const PORT = process.env.PORT || 8080;

/////////////////////////////////////////////////////////////

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// // Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
