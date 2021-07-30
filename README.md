# World 50 Coding Challenge

FullStack Zombie Manager - GraphQL & React

## File structure

This was my first time coding in either GraphQL or utilizing React Hooks so I used the Apollo tutorial to learn the basics and simply built out the tooling for this assignment rather than building the API they had.  Hopefully that explains any unused relics or (strangeness) that I may have failed to remove.

Most of my front end work can be found inside client/src/pages/locations.jsx  I should've refactored the solution into several components and probably utilized the useState hook as well but chose to do it all on one page due to time constraints.  I know that you utilize TypeScript but I chose to move forward with javascript due to the same time restraints.  

Most of the backend work can be found inside the server/src directory.  I left some notes inside of the zombie.js file in the Datasources directory.  Not exactly sure if I'm following best practices in there but I am eager to hear your feedback!

## Installation

Starting from the source directory, you'll have to run in two separate terminal windows:

```bash
cd final/server && npm i && npm start
```

and

```bash
cd final/client && npm i && npm start
```
