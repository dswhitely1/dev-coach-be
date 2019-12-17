const request = require('supertest');
const server = require('../index');

describe('index', () => {
  describe('[GET] / endpoint', () => {
  test('the db env is development', () => {
    expect(process.env.DB_ENV).toBe('development');
  });

  test(' GET should return 200', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });

  test('test server content json ', () => {
    return request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  test('welcome message displayed ', () => {
    return request(server)
      .get('/')
      .expect(200)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.message).toBe('Welcome to the Dev Coach API');
        expect(res.body).toHaveProperty('message');
    });
  })

  describe('[POST] / endpoint', () => {
    const goodData = {"username": "get", "email": "chioma@chioma.com", "password": "testing"}

    const duplicateData = {"username": "chico", "email": "chico@google.com", "password": "chico"}

    const wrongData = {"username": "chioma", "password": "testing"}

    const badToken = { Authorization: "eyJhbGciOiJ"}

    test(' POST REGISTER new member 201 ', () => {
      return request(server)
        .post('/api/auth/register')
        .send(goodData)
        .expect(201)
    })

    test(' POST REGISTER duplicate data 500 ', () => {
      return request(server)
         .post('/api/auth/register')
         .send(duplicateData)
         .set('Accept', 'application/json')
         .expect(500)
         .expect('Content-Type', /json/)
     })

     test(' POST REGISTER wrong data 400 ', () => {
       return request(server)
         .post('/api/auth/register')
        //  .send(wrongData)
         .set('Accept', 'application/json')
         .expect(400)
         .expect('Content-Type', /json/)
     })

     test(' POST LOGIN 200 ', () => {
       return request(server)
         .post('/api/auth/login')
         .send(goodData)
         .expect(200)
         .expect('Content-Type', /json/)
     })

     test(' POST LOGIN wrong data 500 ', () => {
       return request(server)
         .post('/api/auth/login')
         .send(wrongData)
         .set('Accept', 'application/json')
         .expect(500)
         .expect('Content-Type', /json/)
     })

     test(' POST LOGIN no data 500 ', () => {
       return request(server)
         .post('/api/auth/login')
         .send(wrongData)
         .set('Accept', 'application/json')
         .expect(500)
         .expect('Content-Type', /json/)
     })

     test(' POST PROJECTS deny access 400 ', () => {
      return request(server)
        .post('/api/users/1/projects')
        .send(badToken)
        .set('Accept', 'application/json')
        .expect(400)
        .expect('Content-Type', /json/)
    })

    test(' POST PROJECTS bad request 400 ', () => {
      return request(server)
         .post('/api/users/1/projects')
        //  .send(token)
         .set('Accept', 'application/json')
         .expect(400)
         .expect('Content-Type', /json/)
     })
  })
})