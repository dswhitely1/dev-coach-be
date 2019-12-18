const request = require('supertest');
const server = require('../../../../index');
// const db = require('../data/dbConfig');

// beforeEach(() => {
//   return db('users_table').truncate()
// })

describe('user', () => {
  
  describe('[POST] / endpoint', () => {

    const jayneData = {"first_name": "Jayne", "last_name": "Carmichael Norrie", "email": "jayne@musicisourforte.co.uk", "password": "chico", "user_role_id": 2}

    const testUser = {"first_name": "matt", "last_name": "norrie", "email": "matt@google.com", "password": "matt"}

    const testUserLogIn = {"email": "matt@google.com", "password": "matt"}

    const newUser = {"first_name": "susan", "last_name": "norrie", "email": "susan@google.com", "password": "susan"}

    const newUserLogIn = {"email": "susan@google.com", "password": "susan"}

    const userData = {"first_name": "chico", "last_name": "norrie", "email": "chico@chico.com", "password": "chico"}

    const userDataLogIn = {"email": "chico@chico.com", "password": "chico"}

    const duplicateData = {"first_name": "chico", "last_name": "norrie", "email": "chico@chico.com", "password": "chico"}

    const wrongEmail = {"first_name": "chico", "last_name": "norrie", "email": "chico@google.com", "password": "chico"}

    const wrongPassword = {"first_name": "chico", "last_name": "norrie", "email": "chico@chico.com", "password": "google"}

    const wrongData = {"first_name": "chico", "password": "testing"}

    test(' POST REGISTER userData 201 ', () => {
      return request(server)
        .post('/user/register')
        .send(userData)
        .expect(201)
    })

    test(' POST REGISTER duplicate data 409 ', () => {
      return request(server)
         .post('/user/register')
         .send(duplicateData)
         .set('Accept', 'application/json')
         .expect(409)
         .expect('Content-Type', /json/)
     })

     test(' POST REGISTER wrong data 400 ', () => {
       return request(server)
         .post('/user/register')
         .send(wrongData)
         .set('Accept', 'application/json')
         .expect(400)
         .expect('Content-Type', /json/)
     })

     test('POST REGISTER testUser gives token 201', async () => {
      const response = await request(server)
        .post('/user/register')
        .send(testUser)
        expect(response.status).toEqual(201)
        expect(response.body.message).toBe('Welcome matt')
        expect(response.body).toHaveProperty('token');
    })

    test('POST REGISTER newUser gives user_id 201 ', async () => {
      const response = await request(server)
        .post('/user/register')
        .send(newUser)
        expect(response.status).toEqual(201)
        expect(response.body).toHaveProperty('user_id');
    })

     test(' POST LOGIN wrong data 400 ', () => {
       return request(server)
         .post('/user/login')
         .send(wrongData)
         .set('Accept', 'application/json')
         .expect(400)
         .expect('Content-Type', /json/)
     })

     test(' POST LOGIN wrong email 401', () => {
       return request(server)
        .post('/user/login')
        .send(wrongEmail)
        .set('Accept', 'application/json')
        .expect(401)
        .expect('Content-Type', /json/)
     })

     test(' POST LOGIN wrong password 401', () => {
      return request(server)
       .post('/user/login')
       .send(wrongPassword)
       .set('Accept', 'application/json')
       .expect(401)
       .expect('Content-Type', /json/)
    })

     test(' POST LOGIN no data 400 ', () => {
       return request(server)
         .post('/user/login')
        //  .send(wrongData)
         .set('Accept', 'application/json')
         .expect(400)
         .expect('Content-Type', /json/)
     });

     test(' POST LOGIN no data message check 400 ', () => {
      return request(server)
        .post('/user/login')
       //  .send(wrongData)
        .expect(400)
        .then(res => {
          expect(res.body.message).toBe('Please make sure required fields are filled in.');
        })
    });

     test(' POST LOGIN jayneData expect 401 ', () => {
      return request(server)
        .post('/user/login')
        .send(jayneData)
        .expect(401)
        .expect('Content-Type', /json/)
    });

    test(' POST LOGIN userData expect 200 ', () => {
      return request(server)
        .post('/user/login')
        .send(userDataLogIn)
        .expect(200)
        .expect('Content-Type', /json/)
    })

    test('POST LOGIN TESTUSER welcome 200 ', () => {
      return request(server)
        .post('/user/login')
        .send(testUserLogIn)
        .expect(200)
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body.message).toBe('Welcome Back matt!');
        })
    })

    test('POST LOGIN testUser gives token 200 ', () => {
      return request(server)
        .post('/user/login')
        .send(testUserLogIn)
        .expect(200)
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toHaveProperty('token');
        })
    })

    test('POST LOGIN newUser res=object 200 ', () => {
      return request(server)
        .post('/user/login')
        .send(newUserLogIn)
        .expect(200)
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toBeInstanceOf(Object);
        })
    })


  });

  describe('[GET] / endpoint', () => {
    
    test(' ID user 500 expect 404', () => {
      return request(server)
        .get('/user/500')
        .expect(404) 
    });
  })
})