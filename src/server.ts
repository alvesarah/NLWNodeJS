import 'reflect-metadata'; //Ele é importante sempre vir primeiro
import express from 'express';
import './database' //Não precisa especificar que o arquivo é o index porque quando tem index ele já identifica como um padrão.
import { router } from './routes';

const app = express();

app.use(express.json()); //Habilita para trabalhar com o formato JSON
app.use(router); //Importanto o arquivo de rotas no server

// Definindo a porta
app.listen(3333, () => console.log("server is running!"));