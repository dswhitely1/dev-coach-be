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

`POST /user/register`

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
    "message": "Welcome Back Lizzo!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzY4MzM1NDQsImV4cCI6MTU3NjkxOTk0NH0.SJgkKCi8rezDfWseszQ4HkSNyDbQNdeEmX0Kp48Dvic",
    "user": {
        "id": 2,
        "first_name": "Lizzo",
        "last_name": "Smith",
        "email": "lizzo@google.com",
        "password": "$2a$10$32yN0PhBtC.F9DESU4JCnO0oHKo6Z2Bz1QjK83hxn/fflvhGKjY4W",
        "location": null,
        "role_id": 1,
        "user_id": 5,
        "avatar_url": null,
        "experience_level": 2,
        "confidence_level": 2
    }
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

## Get Coaches

`GET /profile/coaches`

**GET** This will get all coaches 

**Examples**

GET Coaches Success Response

```javascript
{
    "coaches": [
        {
            "id": 1,
            "first_name": "Jayne",
            "last_name": "Carmichael Norrie",
            "email": "jayne@musicisourforte.co.uk",
            "password": "$2a$10$3LmQzlDtk/1NYys6kn5Ea.FH680/SzfqPWNTC3X9qZQ9.a.I1Z3vi",
            "location": null,
            "role_id": 2,
            "user_id": 1,
            "avatar_url": "google.com",
            "experience_level": 1,
            "skill_level": 1,
            "description": "Jayne worked as a singing teacher for 9 years and is now studying with Lambda School",
            "rating": null,
            "hourly_rate": null,
            "contact_url": null
        }
      ]
    }
```

GET Coaches Error Response

```javascript
{
    "message": "Auth Failed"
}
```

## Get Appointments

`GET /appointment/:id`

Parameters

| Name       |  Type  | Description         | Required |
| :--------- | :----: | :-------------      | :------: |
| role       | String | role_id of the user |   Yes    |

**GET** This will get all user appointments at the provided `id` (id is the coach.id or student id) and we need to send a body with an object = {"role": role_id} (role_id from the user)

**Examples**

GET Appointments Success Response

```javascript
{
    "appointments": [
        {
            "first_name": "Bob",
            "last_name": "Smith",
            "email": "bob@google.com",
            "experience_level": 1,
            "confidence_level": 1,
            "avatar_url": "www.stripe.com",
            "id": 1,
            "created_at": "2019-12-20T07:50:04.203Z",
            "appointment_datetime": null,
            "canceled": false,
            "appointment_topic": "Frontend"
        }
      ]
    }
```

GET Appointments Error Response

```javascript
{
    "message": "Auth Failed"
}
```
