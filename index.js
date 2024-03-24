const database = require('./db/db'); //banco de dados
const express = require('express'); //express
const app = express(); //app recebe express
const Video = require('./models/Video')
const VideoRoutes = require("./routes/RoutesVideos");
const hand = require("express-handlebars");

//CONTROLLERS
const VideosControllers = require("./controllers/ControllerVideo");

//UTILIZAÇÃO DO HANDLEBARS
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars"); app.use(express.urlencoded({extended: true,}));

app.use(express.json());
app.use(express.static("public"));

//ROTAS
app.use("/", VideoRoutes);

//sincronismo com o banco de dados
try{
  database.sync().then(() => {
  app.listen(9443, () => {console.log('Servidor rodando');}) //criação do servidor dentro do sync
  })
}
catch(erro){
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
};