import * as request from 'supertest';
import {INestApplication} from '@nestjs/common';
import {initialiseTestTransactions, runInTransaction} from 'typeorm-test-transactions';
import {EstadoEntity} from "../../../../src/modules/estados/entities/estado.entity";
import {Factory} from "typeorm-factory";
import {afterAllDefault, beforeAllDefault} from "../../../helpers/default-setup";

initialiseTestTransactions();

describe('Read Estados', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await beforeAllDefault();
  });

  afterAll(async () => {
    await afterAllDefault(app)
  });

  it('deve listar todos os estados', runInTransaction(async () => {
    const estadoFactory = new Factory(EstadoEntity);

    await estadoFactory.create({nome: 'São Paulo', sigla: 'SP'});
    await estadoFactory.create({nome: 'Rio de Janeiro', sigla: 'RJ'});

    const mutation = `query {
      estados (sorting: { field: sigla direction: ASC }) {
        edges { node { id, nome, sigla } } 
      }
    }`;

    const {body: {data: { estados: { edges }}}} = await request(app.getHttpServer())
      .post('/graphql')
      .send({query: mutation});

    expect(edges).toHaveLength(2);

    expect(edges[0].node.nome).toBe('Rio de Janeiro');
    expect(edges[0].node.sigla).toBe('RJ');

    expect(edges[1].node.nome).toBe('São Paulo');
    expect(edges[1].node.sigla).toBe('SP');
  }));
});
