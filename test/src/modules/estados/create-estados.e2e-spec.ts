import * as request from 'supertest';
import {INestApplication} from '@nestjs/common';
import {initialiseTestTransactions, runInTransaction} from 'typeorm-test-transactions';
import {afterAllDefault, beforeAllDefault} from "../../../helpers/default-setup";

initialiseTestTransactions();

describe('Create Estados', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await beforeAllDefault();
  });

  afterAll(async () => {
    await afterAllDefault(app)
  });

  it('deve criar um estado', runInTransaction(async () => {
    const mutation = `mutation {
      createOneEstado(input: {
        estado: { nome: "Mato Grosso do Sul", sigla: "MS" }
      }) { id, nome, sigla }
    }`;

    const {body: {data}} = await request(app.getHttpServer())
      .post('/graphql')
      .send({query: mutation});

    expect(data?.createOneEstado.nome).toBe('Mato Grosso do Sul');
    expect(data?.createOneEstado.sigla).toBe('MS');
  }));

  it('deve falhar ao tentar criar um estado com sigla invalida', runInTransaction(async () => {
    const mutation = `mutation {
      createOneEstado(input: {
        estado: { nome: "Mato Grosso do Sul", sigla: "MSS" }
      }) { id, nome, sigla }
    }`;

    const {body: {data, errors}} = await request(app.getHttpServer())
      .post('/graphql')
      .send({query: mutation});

    expect(data).toBeNull();
    expect(errors).toHaveLength(1);

    const [error] = errors;

    expect(error.message).toBe('Bad Request Exception');
    expect(error.extensions.code).toBe('BAD_USER_INPUT');
    expect(error.extensions.response.statusCode).toBe(400);
    expect(error.extensions.response.message[0]).toContain('sigla must be shorter than or equal to 2 characters')
  }));
});
