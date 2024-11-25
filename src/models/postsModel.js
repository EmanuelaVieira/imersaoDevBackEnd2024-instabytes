import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; //O .js deve ser colocado sempre que estiver trabalhando no back-end;

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); //Conecta ao banco de dados utilizando a String de conexão fornecida

export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objetoId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objetoId)}, {$set:novoPost});
}
