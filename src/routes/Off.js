import { Switch, Route } from 'react-router-dom';

import Sessions from '../pages/Sessions';

const Off = () => {
  return (
    <Switch>
      <Route exact path="/" component={Sessions} />
      <Route
        path="*"
        component={() => <h1>404 - Página não encontrada :(</h1>}
      />
    </Switch>
  );
};

export default Off;
