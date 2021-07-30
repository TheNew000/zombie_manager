# World 50 Coding Challenge

FullStack Zombie Manager - GraphQL & React

## File structure

First of all I appologize for any strangeness you may come across.  This was my first time coding in either GraphQL or utilizing React Hooks so I used the Apollo tutorial to learn the basics and simply built out the tooling for this assignment rather than building the API they had.  Hopefully that explains any unused relics that I may have failed to remove.

Most of my front end work can be found inside client/src/pages/locations.jsx  I should've refactored the solution into several components and probably utilized the useState hook as well but chose to do it all on one page due to time constraints.  

Most of the backend work can be found inside the server/src directory.  I left some notes inside of the zombie.js file in the Datasources directory.  Not exactly sure if I'm following best practices in there but I am eager to hear your feedback!

## Installation

Prior to running the app please run in two separate terminal windows:

```bash
cd final/client && npm i && npm start
```

and

```bash
cd final/server && npm i
```

The reason we haven't started the server yet is that I used sqlite to create a small local file to store data on so you'll need to stand it up on your end as well:

To create the db please run:

`npx sequelize-cli db:create`

To build the tables run:

`npx sequelize-cli db:migrate`

And finally to populate the database with some dummy data:

`npx sequelize-cli db:seed:all`

Now inside the server you can run:

`npm start`

