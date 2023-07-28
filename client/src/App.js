import AddClientModal from "./components/AddClientModal";
import Client from "./components/Client";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Projects from "./components/Project";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from "./pages/Project";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        {/* <Header />
        <div className="container">
          <AddClientModal />
          <Projects />
          <Client />
        </div> */}
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>

    </>
  );
}

export default App;
