const request = require('supertest');
const server = require("../../../index");

let token;

beforeAll((done) => {
    request(server)
        .post('/user/login')
        .send({ email: "daetor2012@hotmail.com", password: "password123" })
        .end((err, response) => {
            token = response.body.token
            console.log(token);
            done()
        })
}, 9000)

describe('profiles', () => {
    beforeAll((done) => {
        request(server)
            .post('/user/login')
            .send({ email: "daetor2012@hotmail.com", password: "password123" })
            .end((err, response) => {
                token = response.body.token
                console.log(token);
                done()
            })
    })
    
    describe('[GET] /coaches ', () => {
        test('Get coaches list', async () => {
            const response = await request(server)
                .get('/profile/coaches')
                .set('authorization', `${token}`)
            expect(response.statusCode).toBe(200)
            expect(response.type).toBe("application/json")

        })
    })
    describe('[GET] /students', () => {
        test('Get students list', async () => {
            const response = await request(server)
                .get('/profile/students')
                .set('authorization', `${token}`)
            expect(response.statusCode).toBe(200)
            expect(response.type).toBe("application/json")

        })
    })
})