import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users") //Definindo que a classe vai ser uma entidade, nome da tabela
class User {
  // Definindo os atributos

  @PrimaryColumn()
  readonly id: string;
  
  @Column() //Se o nome da coluna for diferente do atributo, precisa colocar o nome no parentese. @Column("nome")
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    //Quando estiver criando um usuário, quer criar id. Só que se estiver editando a gente quer que a entidade use o id que já tem como padrão. 
    if(!this.id) { //Se esse id não existir
      this.id = uuid(); //Que ele tenha o valor de uuid
    }
  }
}

export { User };