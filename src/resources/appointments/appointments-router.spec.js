const request = require('supertest');
const server = require("../../../index");

let token;

beforeAll((done) => {
     request(server)
        .post('/user/login')
        .send({ email: "daetor2012@hotmail.com", password: "password123" })
        .end((err, response) => {
            token = response.body.token
            console.log(token)
            done()
        })
}, 5000)

describe('appointments', () => {
    
    describe('[POST] /', () => {
        test('Post new appointment failure intended', async () => {
            const response = await request(server)
                .post('/appointment')
                .set('authorization', `${token}`)
                .send({ first_name: "David", last_name: "York" })
            expect(response.statusCode).toBe(500)
            expect(response.type).toBe("application/json")
            expect(response.body.message).toBe("You can't make this appointment")

        })
    })
    describe('[GET] /:id', () => {
        test('Get appointment by ID', async () => {
            const response = await request(server)
                .get('/appointment/1')
                .set('authorization', `${token}`)
            expect(response.statusCode).toBe(200)
            expect(response.type).toBe("application/json")
        })
    })
})