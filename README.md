# Boreal

## Installation

### Backend
Enter to backend folder, run npm install, copy the .env.example to .env and set the env variables.
```bash
npm install
cd backend
cp .env.example .env
```
There is an env variable called *MONGO_URI*, you can create an account in [mongodb.com](https://www.mongodb.com/cloud/atlas) and get the URI.

Run the project
```bash
npm start
```
### Frontend

Enter to frontend folder, run npm install, copy the .env.local.example to .env.local and set the env variables.
```bash
npm install
cd frontend
cp .env.local.example .env.local
```

Run the project
```bash
npm run dev
```
## Usage

### Backend

Create a user
```curl
curl --location --request POST 'http://localhost:3000/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "example@example.com",
    "password": "example"
}'
```

Login
```curl
curl --location --request POST 'http://localhost:3000/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "example@gmail.com",
    "password": "example"
}'
```

Create blog:
```curl
curl --location --request POST 'http://[::1]:3000/blogs' \
--header 'Authorization: Bearer token generated in login request' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Example",
    "smallDescription": "A new blog",
    "body": "blog content"
}'
```

You can enter to the endpoint */explorer* to see the diferent functionalities.