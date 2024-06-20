// server/index.js

const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get("/api", (req, res) => {
    res.json({message: "Hola desde el servidor!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${ PORT }`);
}); 

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});
