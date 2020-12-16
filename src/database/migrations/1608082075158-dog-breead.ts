import {MigrationInterface, QueryRunner} from "typeorm";

export class dogBreead1608082075158 implements MigrationInterface {
    name = 'dogBreead1608082075158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dog_breed" ("Id" varchar PRIMARY KEY NOT NULL, "Name" varchar(300) NOT NULL, "PictureUrl" varchar(500) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dog_breed"`);
    }

}
