README

DESCRIPTION

Giraffe Support was the authors' Week 9 project for the School of Code (Cohort 12) Bootcamp, built with a PERN stack. They were tasked to build an application that fixed an issue faced by bootcamp participants (the full set of instructions can be found here: https://docs.google.com/document/d/e/2PACX-1vQMhiGaIX9rMuug3C7A-3IB1azhWRvr-i3DF3zeAAyeBXekzy0TthYBcOe9f_P0CrJL6bJ2edqe8Gb9/pub).

Reactive Giraffe identified issues with the current technical help request system - for requests submitted during workshops and other tasks. They seaked to streamline the request-response system for both coaches and bootcampers by making a straighforward and easy-to-manage system: 
- To see how many people were waiting for help at a glance 
- To see how long people had been waiting for help 
- To mark the completion status of people's help requests (waiting, in-progress or done) 
- To collect data on request topics

This backend folder serves w9_frontend-project-reactive-giraffe and enables server-side and database handling to run Giraffe Support.

INSTALLATION INSTRUCTIONS

1. Set up database for postgreSQL (the authors used Heroku https://devcenter.heroku.com/articles/getting-started-with-nodejs)

2. Initiate node package manager:

        npm i

3. Configure environment modules (.env)  with database credentials:
        
        PGUSER="text"
        PGHOST="text"
        PGDATABASE="text"
        PGPASSWORD="text"
        PGPORT=1111

4. Create and populate tables:

        npm run create

        npm run populate

5. Run server:

        npm start
