import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = "http://localhost:8080/";
const demoUri = "https://flyby-router-demo.herokuapp.com/"

const client = new ApolloClient({
    uri: demoUri,
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

export default client;