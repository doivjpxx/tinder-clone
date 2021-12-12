import Layout from 'containers/layout';
import React from 'react';
import Routing from 'routes';
import './App.css';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Layout>
        <Routing />
      </Layout>
    </React.Fragment>
  );
}

export default App;
