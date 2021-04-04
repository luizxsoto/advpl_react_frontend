import { Switch, Route } from 'react-router-dom';

import Permissions from '../pages/Permissions';
import PermissionsForm from '../pages/Permissions/Form';

const Onn = () => {
  return (
    <Switch>
      <Route exact path="/" component={Permissions} />
      <Route exact path="/permissions/form" component={PermissionsForm} />
      <Route
        path="*"
        component={() => <h1>404 - Página não encontrada :(</h1>}
      />
    </Switch>
  );
};

export default Onn;
