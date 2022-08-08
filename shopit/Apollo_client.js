import { InMemoryCache, ApolloClient } from '@apollo/client';

const Client = new ApolloClient({
  uri: 'http://localhost:1337/graphql/',
  cache: new InMemoryCache(),
});

export default Client;
