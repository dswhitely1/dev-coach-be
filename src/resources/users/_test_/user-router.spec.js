const request = require('supertest');
const server = require('../../../../index');
// const db = require('../data/dbConfig');

// beforeEach(() => {
//   return db('users_table').truncate()
// })

describe('user', () => {
  
  describe('[POST] / endpoint', () => {

    // const jayneData = {"first_name": "Jayne", "last_name": "Carmichael Norrie", "email": "jayne@musicisourforte.co.uk", "password": "chico"}

    const jayneDataWrongEmail = {"first_name": "Jayne", "last_name": "Carmichael Norrie", "email": "jayne@google.co.uk", "password": "chico"}

    const jayneDataWrongPassword = {"first_name": "Jayne", "last_name": "Carmichael Norrie", "email": "jayne@musicisourforte.co.uk", "password": "lambda", "user_role_id": 2}

    const goodData = {"first_name": "chico", "last_name": "norrie", "email": "chico@chico.com", "password": "chico"}
    
    const goodDataLogIn = {"email": "chico@chico.com", "password": "chico"}

    const wrongEmail = {"email": "chico@google.com", "password": "chico"}

    const wrongPassword = {"email": "chico@chico.com", "password": "google"}

    const duplicateData = {"first_name": "chico", "last_name": "norrie", "email": "chico@chico.com", "password": "chico"}

    const emailAlreadyTaken = {"first_name": "bob", "last_name": "jones", "email": "chico@chico.com", "password": "jones"}


    test(' POST REGISTER new member 201 ', () => {
      return request(server)
        .post('/user/register')
        .send(goodData)
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

     test(' POST REGISTER duplicate email 409 ', () => {
      return request(server)
         .post('/user/register')
         .send(emailAlreadyTaken)
         .set('Accept', 'application/json')
         .expect(409)
         .expect('Content-Type', /json/)
     })

     test(' POST LOGIN wrong email 400 ', () => {
       return request(server)
         .post('/user/login')
         .send(wrongEmail)
         .set('Accept', 'application/json')
         .expect(400)
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
     })

     test(' POST LOGIN 200 ', () => {
      return request(server)
        .post('/user/login')
        .send(goodData)
        .expect(200)
        .expect('Content-Type', /json/)
    })
  });

  describe('[GET] / endpoint', () => {
    
    test(' ID user 4 expect 200', () => {
      return request(server)
        .get('/user/4')
        .expect(200) 
    });

    test(' ID user 500 expect 404', () => {
      return request(server)
        .get('/user/500')
        .expect(404) 
    });
  })
})