const request = require('supertest');
const server = require("../../../index");

let token;

beforeAll((done) => {
    request(server)
        .post('/user/login')
        .send({ email: "daetor2012@hotmail.com", password: "password123" })
        .end((err, response) => {
            token = response.body.token
            done()
        })
})

describe('appointments', () => {
    describe('[POST] /', () => {
        test('Post new appointment failure intended', () => {
            return request(server)
                .post('/appointment')
                .set('Authorization', `Bearer ${token}`)
                .send({ first_name: "David", last_name: "York" })
                .expect(request.statusCode).toBe(500)
                .expect(request.type).toBe("application/json")
                .expect(request.body.message).toBe("You can't make this appointment")

        })
    })
    describe('[GET] /:id', () => {
        test('Get appointment by ID', () => {
            return request(server)
            .get('/appointment/1?role=2')
            .set('Authorization', `Bearer ${token}`)
            .expect(request.statusCode).toBe(200)
            .expect(request.type).toBe("application/json")
            .expect(request).toHaveLength(634)
        })
    })

    describe('')
})