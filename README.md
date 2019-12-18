# Quality Hub Backend

[dev-coach.com](https://www.dev-coach.com)

[Notion Document](https://www.notion.so/EU3-QualityHub-503a434aa6b4425595d2b4fa03a1d406)

[Trello Board](https://trello.com/b/SlF9gway/quality-hub)

### The following dependencies were used:

- Node
- Express
- PostgresSQL
- Knex
- Knex Cleaner
- Bcryptjs
- JsonWebToken
- Cors
- Helmet
- Dotenv
- Nodemon (Development)
- Cross-Env (Development)
- Jest (Development)
- SuperTest (Development)

## Getting Started

### Install dependencies

`npm install`

### Run Database Migrations

`npm run migrate`

### Run Database Seeds

`npm run seed`

### Run Server

`npm run server`

## Auth Routes

### Register

[POST] `/user/register`

Parameters

| Name       |  Type  | Description    | Required |
| :--------- | :----: | :------------- | :------: |
| first_name | String | Users forename |   Yes    |
| last_name  | String | Users surname  |   Yes    |
| email      | String | Users email    |   Yes    |
| password   | String | Users password |   Yes    |

**POST** This will create a new user and send back a token

**Examples**

Register Request

```javascript
{
	"first_name": "dom",
	"last_name": "eccleston",
	"email": "dom12@gmail.com",
	"password": "123"
}
```

Register Success Response

```javascript
{
  "message": "Welcome dom",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzY2NzA1NDQsImV4cCI6MTU3Njc1Njk0NH0.jpyV3IoB3sYehy8CdQ_h1EPhSjIrglvmVEEgUyqo_Zs",
  "user_id": 18
}
```

Register Error Response

```javascript
{
  "message": "Please make sure required fields are filled in."
}
```

## Login

`POST /user/login`

Parameters

| Name     |  Type  | Description    | Required |
| :------- | :----: | :------------- | :------: |
| email    | String | Users email    |   Yes    |
| password | String | Users password |   Yes    |

**POST** This will log the user in and send back a token

**Examples**

Login Request

```javascript
{
	"email": "dom12@gmail.com",
	"password": "123"
}
```

Login Success Response

```javascript
{
  "message": "Welcome Back dom!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzY2NzE5OTcsImV4cCI6MTU3Njc1ODM5N30.HkW-d9WPkpFPD6AhZeG40_jz748kd6B5_AkDOK1pk1U"
}
```

Login Error Response

```javascript
{
  "message": "Please make sure required fields are filled in."
}
```

## Delete User

`DELETE /user/:id`

**DELETE** This will delete a user at the provided `id`

**Examples**

Delete User Success Response

```javascript
{
  "message": "User deleted"
}
```

Delete User Error Response

```javascript
{
  "message": "Unable to find user"
}
```
