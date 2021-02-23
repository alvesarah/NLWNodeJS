import express from 'express';

const app = express();

/*
  Métodos Disponíveis
  GET => Busca
  POST => Salvar
  PUT => Alterar
  DELETE => Deletar
  PATCH => Alteração especifica
*/

// Uma função que recebe um parâmetro com nome da rota => http://localhost:3333/users
// Resquest => Requisição
// Response => Resposta
app.get("/", (request, response) => {
  return response.json({message: "Hello WOrld - NLW04"});
});

// Primeiro parametro que recebe qual é a rota (Recurso API)
// Segundo parametro (resquest , response)
app.post("/", (request, response) => {
  // Recebeu os dados para salvar
  return response.json({message: "Os dados foram salvos com sucesso!"});
});

// Definindo a porta
app.listen(3333, () => console.log("server is running!"));