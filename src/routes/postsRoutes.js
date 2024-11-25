import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage}) //No MAC ou Linux a linha de código seria apenas essa linha sem o ', storage';

const routes = (app) => {
    app.use(express.json()); //Essa linha é responsável por transformar tudo que tiver 'cara de json' em um json;
    app.use(cors(corsOptions));

    app.get("/posts", listarPosts); //Responsável por PEGAR dados;
    app.post("/posts", postarNovoPost); //Responsável por ENVIAR dados;
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizarNovoPost); //Responsável por atualizar os dados;
}

export default routes;
