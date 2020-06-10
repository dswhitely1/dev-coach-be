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
}, 8000)

describe('feedback', () => {
    describe('[GET] /:id', () => {
        test('Get feedback by ID', async () => {
            const response = await request(server)
                .get(`/feedback/1?role=1`)
                .set('authorization', `${token}`)
            expect(response.statusCode).toBe(200)
            expect(response.type).toBe("application/json")
        })
    })
    describe('[POST] /', () => {
        test('Post new feedback', async ()  => {
            const response = await request(server)
                .post('/feedback')
                .set('authorization', `${token}`)
                .send({ feedback: `Overall you did a decent job but could 
                still use a bit of extra work to get better when it comes to 
                handling the clearInterval properly using higher order 
                components and being able to figure out the logic for coding 
                challenge type questions better. I was on the border with 
                whether this was a Yes/No but I think if this was a real 
                interview, I would have suggested a followup interview since 
                it was good but not excellent yet. Overall though 
                communication was good and I enjoyed chatting with him in 
                the end as well.`,
                "rating": 3,
                "user_role_id": 2,
                "appointment_id": 2 })
            expect(response.statusCode).toBe(200)
            expect(response.type).toBe("application/json")

        })
    })
})