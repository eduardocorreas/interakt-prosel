import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri:'https://api.graph.cool/simple/v1/cjzl8wr6w1hj60142bxm292b3'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client