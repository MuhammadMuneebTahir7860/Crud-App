import User from './commonComponents/User/user';
import Users from './modules/Users/users';
import Inbox from './modules/inbox/inbox';
import Starred from './modules/starred/starred';
import Spam from './modules/spam/spam';
import {
   HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <HashRouter>
       <Switch>
    <Route exact path='/'>
      <Inbox />
    </Route>
    <Route exact path='/inbox'>
      <Inbox />
    </Route>
    <Route exact path='/starred'>
    <Starred />
    </Route>
    <Route exact path='/users'>
    <Users />
    </Route>
    <Route exact path='/spam'>
    <Spam />
    </Route>
    <Route path='/User/:index/:name/:rollNo/:Class/:section'><User/></Route>

    </Switch>
    </HashRouter>
  );
}

export default App;
