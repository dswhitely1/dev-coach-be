const request = require('supertest');
const bcrypt = require('bcryptjs');
const server = require('../../../../index');

let token;

beforeAll((done) => {
    request(server)
       .post('/user/login')
       .send({ email: "daetor2012@hotmail.com", password: 'password123', username: "daetor2005" })
       .end((err, response) => {
           token = response.body.token
           done()
       })
}, 11000)

describe('users', () => {
    describe('[GET] /', () => {
        test('Get list of users', async () => {
            const response = await request(server)
                .get('/user')
                .set('authorization', `${token}`)
            expect(response.statusCode).toBe(200)
            expect(response.type).toBe("application/json")
        })
    })
    describe('[GET] /:id', () => {
        test('Get user by ID', async () => {
            const response = await request(server)
                .get('/user/1?role=1')
                .set('authorization', `${token}`)
                console.log(response.body)
                console.log(token)
            expect(response.statusCode).toBe(200)
            expect(response.type).toBe("application/json")
        })
    })
    describe('[POST] /user/login', () => {
        test('Login', () => {
           return request(server)
                .post('/user/login')
                .send({ email: "daetor2012@hotmail.com", password: "password123" })
                .then((response) => {
                    expect(response.statusCode).toBe(200)
                    expect(response.type).toBe("application/json")
                })
                
        })
    })
})