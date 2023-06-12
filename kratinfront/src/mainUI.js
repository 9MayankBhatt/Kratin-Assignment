import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Register from './register';
import ForgotPassword from './forgotpassword';
import Home from './home';
import AddHealthDetails from './addhealthdetails';
import ViewHealthDetails from './viewhealthdetails';

function MainUI() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/forgotpassword" exact component={ForgotPassword} />
          <Route path="/home" exact component={Home} />
          <Route path="/addhealthdetails" exact component={AddHealthDetails} />
          <Route path="/viewhealthdetails" exact component={ViewHealthDetails} />
          </Switch>
      </div>
    );
}

export default MainUI;