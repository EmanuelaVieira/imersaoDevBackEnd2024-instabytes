import express from "express";
import routes from "./src/routes/postsRoutes.js";
//Para 'ligar' o servidor, usar o comando 'npm run dev';
//Se tiver tendo erro pra subir o servidor, checar o IP da máquina;

//Isso é um Array responsável por armazenar uma lista de objetos;
const posts = [ 
    //Cada par de chaves '{}' define um novo objeto;
    {//Dentro de cada par de chaves '{}', é criado um objeto com chave-valor;
      id: 1, //Um ID é o 'número identificador' de cada postagem dessa aplicação e cada identificador é único para cada postagem;
      descricao/*chave*/: "Primeiro teste", /*valor*/
      imagem: "https://placecats.com/millie/300/150" //Cada propriedade chave-valor é separada por vírgula;
    }
];

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => /*essa seta é chamada de Arrow Function*/{
    console.log("Servidor escutando...");
});

/*
//Essa função busca um dado dentro de uma estrutura e checa ID por ID
function buscarPostsPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => { //':' significa que o dado passado após esses dois pontos será um dado variável;
    const index = buscarPostsPorID(req.params.id);
    res.status(200).json(posts[index]); /*'Entra' no json de TODOS os posts e busca apenas o post com o número de ID que foi passado na requisição;
    Essa requisição foi encontrada pela function buscaPostsPorID();J
});
*/