import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = "http://localhost:8080/graphql";
// const demoUri = "https://flyby-router-demo.herokuapp.com/"

const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

export default client;