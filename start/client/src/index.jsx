// import {
//     ApolloClient,
//     gql,
//     NormalizedCacheObject
//   } from '@apollo/client';
//   import { cache } from './cache';
  
//   const client = new ApolloClient({
//     cache,
//     uri: 'http://localhost:4000/graphql'
//   });
  
//   client
//   .query({
//     query: gql`
//       query TestQuery {
//             zombies {
//                 id
//                 name
//                 location {
//                 name
//                 }
//             }
//         }
//     `
//   })
//   .then(result => {
//     console.log(result);
//       let locObj = {};
//       result.data.zombies.forEach(zombie => {
//         if(locObj[zombie.location.name]) {
//           locObj[zombie.location.name].push({name: zombie.name, id: zombie.id});
//         } else {
//           locObj[zombie.location.name] = [{name: zombie.name, id: zombie.id}];
//         }
//       });
//       console.log(locObj);
//     });



import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";
import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import injectStyles from "./styles";

// Initialize ApolloClient
const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
});

injectStyles();

// Pass the ApolloClient instance to the ApolloProvider component
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
