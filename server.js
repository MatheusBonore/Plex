//Arquivo server.js para usar o express como http-server do projeto
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist/Plex"));
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/Plex/index.html'));
});

app.listen(process.env.PORT || 3000);