# DevCoach Backend

## Project Overview

DevCoach provides a platform for junior developers to train and improve their skills efficiently through focused support and feedback. It allows developers to sign up, book coaches, communicate with them over instant messaging and video chat, and work collaboratively on coding challenges. It was built by Ben, Liam, Dom, Ola, Funmi, and Jayne for their Lambda School Labs project.

See the deployed product at [dev-coach.com](https://www.dev-coach.com). We would love to hear your feedback - you can use the chatbox in the bottom right of the screen, or message a member of the team on Slack.

Look through the documents we used to plan and organise the project here:

- [Notion Document](https://www.notion.so/EU3-QualityHub-503a434aa6b4425595d2b4fa03a1d406)

- [Trello Board](https://trello.com/b/SlF9gway/quality-hub)

# Team
Team Lead: [Benjamin Grabow](https://github.com/BenjaminGrabow) | [Oladimeji Ojo](https://github.com/ojokure)  | [Liam Sutton](https://github.com/curm90) | [Funmilayo Talabi](https://github.com/Funmi7)| [Jayne Carmichael Norrie](https://github.com/jaynecn) | [Dom Eccleston](https://github.com/domeccleston)<br>
| --- | --- | --- | --- | --- | --- |
[<img src="https://ca.slack-edge.com/T4JUEB3ME-UGG6CMVMJ-f9508210bec6-512" />](https://github.com/benjamingrabow) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULN0Q2CBC-cd4e7fdb68ec-512" />](https://github.com/ojokure) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULW2F383A-7d224505b235-512" />](https://github.com/curm90) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULVUWMC13-9917d69cee28-512" />](https://github.com/funmi7) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UF3TL8CLS-45731806fd60-512" />](https://github.com/jaynecn) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULXH09K8X-gaec6ed8a28c-512" />](https://github.com/domeccleston)
[<img src="https://github.com/favicon.ico" width="15" />](https://github.com/benjamingrabow) | [<img src="https://github.com/favicon.ico" width="15">](https://github.com/ojokure) | [<img src="https://github.com/favicon.ico" width="15" >](https://github.com/curm90) | [<img src="https://github.com/favicon.ico" width="15" />](https://github.com/funmi7) | [<img src="https://github.com/favicon.ico" width="15" />](https://github.com/jaynecn) | [<img src="https://github.com/favicon.ico" width="15" />](https://github.com/domeccleston)

## Dependencies

The server for this project was written in Node.js, using the Express framework. Our database is a PostgresSql DB hosted on ElephantSQL, with Knex.js as our SQL query builder. For authentication, we used JsonWebToken and Bcryptjs. Our development dependencies were the file watcher Nodemon and the testing libraries Jest and Supertest. The libraries cross-env and dotenv were used to manage environment variables. We made use of the Express middleware Cors and Helmet for secure resource sharing.

Our other dependencies - Pusher, Mailgun, and Stripe - were necessary for the chat, email, and payment services on the frontend.

### Full list of dependencies:

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
- Pusher
- @Pusher/chatkit-server
- Mailgun
- Stripe
- Uuid
- Nodemon (Development)
- Cross-Env (Development)
- Jest (Development)
- SuperTest (Development)


## Getting Started

To get this server running on your local machine, you'll need to download, install the Node.JS dependencies, and run the database migrations. Some of the endpoints will return empty unless you seed the db.

```
git clone https://github.com/LABS-EU3/quality_hub_backend.git
cd quality_hub_backend
npm i
npm run seed
npm run migrate
npm run server
```
## Environment Variables

Several of the API services are dependent on environment variables in a .env file which is untracked by git. You should create a .env file in the root folder and structure it as follows:

```
DATABASE_DEV= // go to elephantsql.com -> create your database -> add your URL here
DATABASE_URL= // go to elephantsql.com -> create your database -> add your URL here
DATABASE_TEST= // go to elephantsql.com -> create your database -> add your URL here
SECRET=<ADD YOUR SECRET>
PUSHER_APP_ID=<PUSHER APP ID>
PUSHER_KEY=<PUSHER KEY>
PUSHER_SECRET=<PUSHER SECRET>
EMAIL_KEY=<MAILGUN EMAIL KEY>
EMAIL_DOMAIN=<MAILGUN EMAIL DOMAIN>
PUSHER_INSTANCE=<PUSHER INSTANCE>
PUSHER_CHAT_KEY=<PUSHER CHAT KEY>
```

## Directory Structure

├───.github
├───.vscode
├───data
│   ├───migrations
│   └───seeds
├───src
│   ├───resources
│   │   ├───appointments
│   │   ├───chat
│   │   ├───feedback
│   │   ├───payments
│   │   ├───profiles
│   │   ├───users
│   │   │   └───tests
│   │   └───video
│   └───utils
└───_test_

### Test

`npm run test`

## Postman Documentation

The details of our API endpoints are found [here](https://documenter.getpostman.com/view/8698539/SWEE1vA3?version=latest). 

# Contributing

If you're interested in contributing to DevCoach, thanks for your interest! You can submit a pull request according to the guidelines below. We're particularly interested in improving our app's performance and styling. Please let one of us know beforehand if you plan to to contribute a new feature to the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

## Coding Style

Our project makes use of the [AirBNB Javascript style guide](https://github.com/airbnb/javascript). Its rules are enforced by ESLint, so you can ensure your code is consistent with our style by checking the console for ESLint warnings.

## Bugs

If you notice a bug on the app, please file an issue letting us know your OS, browser version, what you did, what you expected to see, and what you did see. 

## Submission and Review

Please submit your PR according to the provided template. Your code will need to be approved by at least one other developer prior to being merged, so please at at least two reviewers to your PR.

Adapted from https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md.
