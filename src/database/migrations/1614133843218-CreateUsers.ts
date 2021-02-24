import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614133843218 implements MigrationInterface {

    // up dar um up na migration.
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                  {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                  },
                  {
                    name: "name",
                    type: "varchar",
                  },
                  {
                    name: "email",
                    type: "varchar",
                  },
                  {
                      name: "created_at",
                      type: "timestamp",
                      default: "now()",
                  }
                ],
            })
        );
    }

    // down remover a migration que ta executando
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
