const express = require('express');
const ControllerVideo = require("../controllers/ControllerVideo");
const routes = express.Router();

routes.get('/Cadastrar', ControllerVideo.cadastrarVideo)
routes.post('/Cadastrar', ControllerVideo.VideoCreate)

routes.get('/', ControllerVideo.listarVideo)

routes.get('/update/:id_video', ControllerVideo.UpdateVideo)
routes.post('/update', ControllerVideo.VideoUpdate)

routes.post('/remover', ControllerVideo.removerVideo)

module.exports = routes;