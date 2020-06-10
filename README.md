[![Maintainability](https://api.codeclimate.com/v1/badges/3211a1f6a061db1b55bc/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/dev-coach-be/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/3211a1f6a061db1b55bc/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/dev-coach-be/test_coverage) 


# Dev-Coach Back-End

# Team

Team Lead: [Enoka Jaona](https://github.com/EJaona) [Nazifa Hossain](https://github.com/ampers-and)

Back-end Team: [Jose Reinoso](https://github.com/bigtonito39) [Dallas James](https://github.com/dallasjames) [David York](https://github.com/daetor2012)

Front-end Team: [Mandi Hamza](https://github.com/Mandihamza) [Anna Morris](https://github.com/clay-most)

[dev-coach.com](https://www.dev-coach.com)

[Notion Document](https://www.notion.so/Dev-Coach-com-503a434aa6b4425595d2b4fa03a1d406)

[Trello Board](https://trello.com/b/3qTuFm1A/labspt10-dev-coach)

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
  "email": "[email]" || "username": "[username]"
	"password": "[password]"
}
```

Login Success Response

```javascript
{
    "message": "Welcome Back [first_name]!",
    "token": "[token]",
    "user": {
        "id": [id],
        "first_name": "[first_name]",
        "last_name": "[last_name]",
        "email": "[email]",
        "location": "[location]",
        "role_id": [role_id],
        "tags": [tags],
        "avatar_url": "[avatar_url]",
        "linkedin": "[linkedin]",
        "github": "[github]",
        "username": "[username]"
    }
}
```

Login Error Response

```javascript
{
  "message": "Please make sure required fields are filled in."
}
```
## Get Users

`Get /user`

**GET** This will show a list of all users

**Examples**

Get Users Success Response

```javascript
{
  {
    "id": [id],
    "first_name": "[first_name]",
    "last_name": "[last_name]",
    "email": "[email]",
    "location": "[location]",
    "role_id": [role_id],
    "tags": [tags],
    "avatar_url": "[avatar_url]",
    "linkedin": "[linkedin]",
    "github": "[github]",
    "username": "[username]"
  }
}
```

## Get User By ID

**GET** This will show a user with a specified ID

**Examples**

Get User Success Response

```javascript
{
  {
    "id": [id],
    "first_name": "[first_name]",
    "last_name": "[last_name]",
    "email": "[email]",
    "password": "[hashed password]"
    "location": "[location]",
    "role_id": [role_id],
    "tags": "[tags]",
    "avatar_url": "[avatar_url]",
    "linkedin": "[linkedin]",
    "github": "[github]",
    "username": "[username]"
  }
}
```

## Update User

`PUT /user/:id`

**PUT** This will update the user

**Examples**

Update User Success Response

```javascript
{
  "updatedUser": {
    "id": [id],
    "first_name": "[first_name]",
    "last_name": "[last_name]",
    "email": "[email]",
    "password": "[hashed password]"
    "location": "[location]",
    "role_id": [role_id],
    "tags": "[tags]",
    "avatar_url": "[avatar_url]",
    "linkedin": "[linkedin]",
    "github": "[github]",
    "username": "[username]"
  },
  "message": "user updated successfully"
}
```

## Reset Password

`POST /user/resetPassword`

**POST** This will send an email to the user to reset the password

**Examples**

Reset password success

```javascript
{
  "message": "Email sent"
}
```

Reset password failure

```javascript
{
  "message": "that email address is not recognized. Please try again"
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
            "id": [id],
            "first_name": "[first_name]",
            "last_name": "[last_name]",
            "email": "[email]",
            "password": "[hashed password]",
            "location": "[location]",
            "role_id": 2,
            "user_id": [user_id],
            "avatar_url": "[avatar_url]",
            "experience_level": [experience_level],
            "skill_level": [skill_level],
            "description": "[description]",
            "rating": [rating],
            "hourly_rate": [hourly_rate]
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
## Get Students

`GET /profile/students`

**GET** This will get all students 

**Examples**

GET Students Success Response

```javascript
{
    "students": [
        {
          "id": [id],
          "first_name": "[first_name]",
          "last_name": "[last_name]",
          "email": "[email]",
          "password": "[hashed password]",
          "location": "[location]",
          "avatar_url": "[avatar_url]",
          "github": "[github]",
          "linkedin": "[linkedin]",
          "username": "[username]",
          "role_id": [role_id],
          "user_id": [user_id],
          "experience_level": [experience_level],
          "confidence_level": [confidence_level]
        }
      ]
    }
```

GET Students Error Response

```javascript
{
    "message": "Auth Failed"
}
```

## Post coach

`POST /profile/coaches`

**POST** This will create a new coach

**Example**

Post request

```javascript
{
      "user_id": [user_id],
      "experience_level": [experience_level],
      "skill_level": [skill_level],
      "description": "[description]",
      "rating": [rating],
      "hourly_rate": [hourly_rate]
}
```

Post coach Success Response

```javascript
{
  "coach": {
    "id": [id],
    "user_id": [user_id],
    "experience_level": [experience_level],
    "skill_level": [skill_level],
    "description": "[description]",
    "rating": [rating],
    "hourly_rate": [hourly_rate]
  }
}
```

Post coach Failure Response

```javascript
{
  "message": "Unable to add new coach"
}
```

## Post student

`POST /profile/studnets`

**POST** This will create a new student

**Example**

Post request

```javascript
{
      "user_id": [user_id],
      "experience_level": [experience_level],
      "confidence_level": [confidence_level]
}
```

Post student Success Response

```javascript
{
  "student": {
    "id": [id],
    "user_id": [user_id],
    "experience_level": [experience_level],
    "confidence_level": [confidence_level]
  }
}
```

Post coach Failure Response

```javascript
{
  "message": "Unable to add new student"
}
```

## Post a payment

`POST /payment/secret`

**POST** This will create a payment secret to pass to front end

**Examples**

Post payment request

```javascript
{
	"price": [price]
}
```

Post payment Success

```javascript
{
  "client_secret": "[client_secret]"
}
```

## Get Appointments

`GET /appointment/:id?role=:role_id`

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
          "first_name": "[first_name]",
          "last_name": "[last_name]",
          "email": "[email]",
          "role_id": 1,
          "avatar_url": "[avatar_url]",
          "user_id": [user_id],
          "experience_level": [experience_level],
          "confidence_level": [confidence_level],
          "id": [id],
          "appointment_datetime": "[appointment_datetime]",
          "canceled": [bool],
          "finished": [bool],
          "appointment_topic": "[appointment_topic]",
          "appointment_length": "[appointment_length]"
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

## Post appointment 

`POST /appointment`

**POST** This will create a new appiontment

**Examples**

Post appointment request

```javascript
{
	"appointment_datetime": "[appointment_datetime]",
	"coach_id": [coach_id],
	"student_id": [student_id],
	"topic_id": [topic_id],
	"length_id": [length_id]
}
```

Post appointment Success response

```javascript
{
  "appointment": {
    "id": [id],
    "appointment_datetime": "[appointment_datetime]",
    "canceled": [bool],
    "finished": [bool],
    "coach_id": [coach_id],
    "student_id": [student_id],
    "topic_id": [topic_id],
    "length_id": [length_id]
  }
}
```

Post appointment Failure response

```javascript
{
  "message": "You can't make this appointment"
}
```

## Post appointment email

`POST /appointment/email`

**POST** This will send and email to the appointment parties

**Examples**

Post appointment email request

```javascript
{
	"email": "[email]",
	"subject": "[subject]",
	"text": "[text]"
}
```

Post appointment email Success response

```javascript
{
  "message": "Email sent"
}
```

## Update Appointment

`PUT /appointment/:id`

**PUT** This will update the appiontment by id

**Examples**

Update Appointment request

```javascript
{
	"appointment_datetime": "[appointment_datetime]",
	"coach_id": [coach_id],
	"student_id": [student_id],
	"topic_id": [topic_id],
	"length_id": [length_id]
}
```

Update Appointment success response

```javascript
{
  "appointment": {
    "id": [id],
    "appointment_datetime": "[appointment_datetime]",
    "canceled": [bool],
    "finished": [bool],
    "coach_id": [coach_id],
    "student_id": [student_id],
    "topic_id": [topic_id],
    "length_id": [length_id]
  }
}
```

## Post Appointment Feedback

`POST /feedback`

**POST** This will create feedback for an appointment

**Examples**

Post Appointment Feedback request

```javascript
{
	"feedback": "[feedback]",
	"rating": [rating],
	"user_role_id": [user_role_id],
	"appointment_id": [appointment_id]
}
```

Post Appointment Feedback Success Response

```javascript
{
  "feedback": {
    "id": [id],
    "feedback": "[feedback]",
    "rating": [rating],
    "appointment_id": [appointment_id],
    "user_role_id": [user_role_id]
  }
}
```

Post Appointment Feedback Failure Response

```javascript
{
  "message": "You dont can make this feedback"
}
```

## Get Appointment Feedback

`/feedback/[user_id]?role=[role_id]`

**GET** This will get all the feedback for appointments by user id

**Examples**

Get appointment feedback success response

```javascript
{
  "feedback": [
    {
      "first_name": "[first_name]",
      "last_name": "[last_name]",
      "email": "[email]",
      "avatar_url": "[avatar_url]",
      "experience_level": [experience_level],
      "skill_level": [skill_level],
      "id": [id],
      "appointment_datetime": "[appointment_datetime]",
      "canceled": [bool],
      "appointment_topic": "[appointment_topic]",
      "appointment_length": "[appointment_length]",
      "feedback": "[feedback]",
      "rating": [rating]
    }
}
```

Get appointment feedback fail response

```javascript
{
  "feedback": []
}
```

## Get a video

`GET /video/token`

**GET** this will send a token for front end to start a video

**Examples**

Succesful response

```javascript
{
  "token": "[token]"
}
```



