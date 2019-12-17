const request = require('supertest');
const server = require('../index');
const db = require('../data/dbConfig');

beforeEach(() => {
  return db('users_table').truncate()
})

describe('user', () => {
  
  describe('[POST] / endpoint', () => {

    const jayneData = {"first_name": "Jayne", "last_name": "Carmichael Norrie", "email": "jayne@musicisourforte.co.uk", "password": "chico", "user_role_id": 2}

    const jayneDataWrongEmail = {"first_name": "Jayne", "last_name": "Carmichael Norrie", "email": "jayne@google.co.uk", "password": "chico", "user_role_id": 2}

    const jayneDataWrongPassword = {"first_name": "Jayne", "last_name": "Carmichael Norrie", "email": "jayne@musicisourforte.co.uk", "password": "lambda", "user_role_id": 2}

    const goodData = {"first_name": "chico", "last_name": "norrie", "email": "chico@chico.com", "password": "chico", "user_role_id": 1}

    const duplicateData = {"first_name": "chico", "last_name": "norrie", "email": "chico@chico.com", "password": "chico", "user_role_id": 1}

    const wrongData = {"first_name": "chico", "password": "testing"}

    test(' POST REGISTER new member 201 ', () => {
      return request(server)
        .post('/user/register')
        .send(goodData)
        .expect(201)
    })

    test(' POST REGISTER duplicate data 500 ', () => {
      return request(server)
         .post('/user/register')
         .send(duplicateData)
         .set('Accept', 'application/json')
         .expect(500)
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

     test(' POST LOGIN 200 ', () => {
       return request(server)
         .post('/user/login')
         .send(goodData)
         .expect(200)
         .expect('Content-Type', /json/)
     })

     test(' POST LOGIN wrong data 500 ', () => {
       return request(server)
         .post('/user/login')
         .send(wrongData)
         .set('Accept', 'application/json')
         .expect(500)
         .expect('Content-Type', /json/)
     })

     test(' POST LOGIN wrong email 500', () => {
       return request(server)
        .post('/user/login')
        .send(jayneDataWrongEmail)
        .set('Accept', 'application/json')
        .expect(500)
        .expect('Content-Type', /json/)
     })

     test(' POST LOGIN wrong password 500', () => {
      return request(server)
       .post('/user/login')
       .send(jayneDataWrongPassword)
       .set('Accept', 'application/json')
       .expect(500)
       .expect('Content-Type', /json/)
    })

     test(' POST LOGIN no data 500 ', () => {
       return request(server)
         .post('/user/login')
        //  .send(wrongData)
         .set('Accept', 'application/json')
         .expect(500)
         .expect('Content-Type', /json/)
     })
  });

  describe('[GET] / endpoint', () => {
    
    test(' ID user 1', () => {
      return request(server)
        .get('/user/1')
        .expect(200) 
    });

    test(' ID user 500 expect 404', () => {
      return request(server)
        .get('/user/500')
        .expect(404) 
    });
  })
})