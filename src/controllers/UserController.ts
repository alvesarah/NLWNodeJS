import { Request, Response } from 'express'; //Importando o resquest e response do express
import { getRepository } from 'typeorm';
import { User } from '../models/user';

class UserController{
  async create(request: Request, response: Response) {
    // Como vamos receber os parametros para inserir no banco de dados? Por request
    
    //Fazendo a desestruturação
    const { name, email } = request.body;

    const usersRepository = getRepository(User);

    //Não permitir a criação de um usuário que já tenha email preenchido
    // SELECT * FROM users WHERE email = "email";
    const userAlreadyExists = await usersRepository.findOne({
      // o findOne consiste em definir que se tiver um resultado já basta
      email
    });

    // Se existir algum usuário com este email
    if(userAlreadyExists) {
      return response.status(400).json({
        error: "User already exists!"
      });
    }

    //Criar um objeto de usuário
    const user = usersRepository.create({
      name, email
    });

    await usersRepository.save(user);

    return response.json(user);
  }
}

export { UserController }