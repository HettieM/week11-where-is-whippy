[![Netlify Status](https://api.netlify.com/api/v1/badges/0e9d253d-58de-49ca-8655-8be52752a91b/deploy-status)](https://app.netlify.com/sites/where-is-whippy/deploys)
![Travis](https://travis-ci.com/fac19/week11-where-is-whippy.svg?branch=master)

# week11-where-is-whippy

An ice cream truck and customer finder for all you choc-chip nuts out there

## Description

The project is split into two subfolders. `client-app/` is the React front end and `server-api` is the backend Express REST API.

## Deployment

The FE and BE are deployed on Nelify and Heroku but there is no real functionality. Please code review locally to see the features and refer to the API endpoints section for guidance on CRUD functions.

## Features
What can we do?

- You can sign up as either a vendor or customer.
- As a vendor you will be able to generate a heatmap of customers that have signalled they want icecream.
- As a customer you can signal you want ice cream. Then when generating the heatmap as a vendor that location should show.

### Missing features
- Customers not able to see vendor locations on their map (sorry no ice cream today)
- Vendor heatmap currently showing all customer locations (instead of only in last 30 mintutes and between two dates)
- No authorization on the API's endpoints

## Set up Instructions

1. Clone this repo
2. Run npm i on your terminal to install dependencies in the

- client-app/
- server-api/
- Root folder 

Make sure you use `npm start` in the client-app/ and server-api/ folders respectively when running the project.

### Set up database for backend

3. Enter postgres and set up a superuser for local database

```
CREATE USER myuser WITH PASSWORD 'mypassword';
ALTER USER myuser WITH SUPERUSER;
```

4. Set up local dev and testing database. The latter must be called student_project_test_db.

```
   CREATE DATABASE my_new_db WITH OWNER myuser;
   \c my_new_db;
   \i .../db/init.sql;
   CREATE DATABASE student_project_test_db WITH OWNER myuser;
   \c student_project_test_db;
   \i .../db/init.sql;
```

5. Create a .env file in the `server-api/` folder with the following inside:

```
PGDATABASE=my_new_db
PGUSER=myuser
PGPASSWORD=mypassword
JWT_SECRET=mysecret
```

Hopefuly the project should run!

### REST API Endpoints

Can check these locally with Postman. Here is a collection for testing endpoints locally.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/49b550d2bcb9bb2c74a7)

### GET

- GET all vendors: `http://localhost:8080/vendors/`
- GET all customer coordinates:`http://localhost:8080/customers/coords`
- GET all vendor coordinates: `http://localhost:8080/vendors/coords`

### POST

- POST new customer coordinates: `http://localhost:8080/customers/coords`
- POST new vendor coordinates: `http://localhost:8080/vendors/coords`
- POST signup new vendor `http://localhost:8080/vendors/signup`
- POST login vendor `http://localhost:8080/vendors/login`

## Dependencies Installed

- pg - Non-blocking postgres client for Node (API)
- dotenv - Allows private variables to be added (API)
- nodemon - Restarts the server automatically when you make a change to the code
- bcrypt - hashes the passwords
- jsonwebtoken - used to create a jwt for the users to sign in and out
- Styled components - for CSS

### Dev Dependencies Installed

- Jest - Testing library (API)
