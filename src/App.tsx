import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from './context/Provider';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
