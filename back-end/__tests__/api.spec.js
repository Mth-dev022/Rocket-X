const request = require('supertest');
const app = require('../server/index');
const dotenv = require('dotenv');
const { questions, answers } = require('../db/data');
dotenv.config()

describe('Testando endpoints de perguntas', () => {
    it('Deve retornar status 200 para /api/questions/getQuestions', async () => {
        const response = await request(app).get('/api/questions/getQuestions');
        expect(response.status).toBe(200);
    });
    it('Deve retornar status 200 para POST /api/questions/getQuestions', async () => {
        const response = await request(app)
            .post('/api/questions/getQuestions')
            .send({ questions, answers })
        expect(response.status).toBe(200);
    });
    it('Deve retornar status 200 para DELETE /api/questions/getQuestions', async () => {
        const response = await request(app)
            .delete('/api/questions/getQuestions')
        expect(response.status).toBe(200);
    });
});

describe("Testando endpoints de resultados", () => {
    it('Deve retornar status 200 para GET /api/questions/result', async () => {
        const response = await request(app).get('/api/questions/result');
        expect(response.status).toBe(200);
    });
    it('Deve retornar status 200 para POST /api/questions/result', async () => {
        const response = await request(app)
            .post('/api/questions/result')
            .send({
                username: "matheus",
                result: 0,
                attempts: 5,
                points: 0,
                achieved: true
            })
        expect(response.status).toBe(200);
    });
    it('Deve retornar status 200 para DELETE /api/questions/result', async () => {
        const response = await request(app).
            delete('/api/questions/result');
        expect(response.status).toBe(200);
    });
})

describe('Testando endpoints de login', () => {
    it('Deve retornar status 200 para /api/auth/login', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: process.env.EMAIL, password: process.env.PASSWORD });
        expect(response.status).toBe(200);
    });
});
describe("Testando endpoints de register", () => {
    it('Deve retornar status 400 para /api/auth/register', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                username: "Matheus",
                email: "test@gmail.com",
                password: "123"
            });
        expect(response.status).toBe(409);
    });
});