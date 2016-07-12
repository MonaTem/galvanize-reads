# Galvanize Reads

![Galvanize Reads](greads.jpg "Galvanize Reads")

* Galvanize Reads is a [CRUD](https://git.heroku.com/greads25.git) app to track books and authors.
* The app our Q2 assessment for the [Galvanize Full Stack](http://www.galvanize.com/courses/web-development/) program.
* Find it live on the web at: https://git.heroku.com/greads25.git

## Created By

Christopher Comella    
http://linkedin.com/in/comella

## Key Technologies Used

* [Node.js](https://nodejs.org)
* [Express](http://expressjs.com)
* [Knex.js](http://knexjs.org)
* [PostgreSQL](https://www.postgresql.org)

## Run It Locally

Assuming you have the required software on you computer and have it configured properly, you should be able to run the app on your machine with the following steps:

1. Create the database:
   - ````$ createdb greads````
2. Clone and install the app:
   - ````$ git clone git@github.com:chrisco/galvanize-reads.git````
   - ````$ cd galvanize-reads````
   - ````$ npm i````
3. Create the database tables:
   - ````$ psql q2db < ./sql/create.sql````
4. Seed the database tables:
   - ````$ knex seed:run````
4. Start the server:
   - ````$ npm run dev-start````
2. Visit: [http://localhost:3000](http://localhost:3000)
