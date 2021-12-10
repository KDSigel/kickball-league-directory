import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './views/Home/Home';
import EditPlayer from './views/Players/EditPlayer';
import PlayerDetail from './views/Players/PlayerDetail';
import Players from './views/Players/Players';
import EditTeam from './views/Teams/EditTeam';
import TeamDetail from './views/Teams/TeamDetail';
import Teams from './views/Teams/Teams';

function App() {
  return (
    <div className="App">
<Router>
  <Navigation />
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/players' component={Players}/>
    <Route exact path='/player/:id' component={PlayerDetail}/>
    <Route exact path='/player/edit/:id' component={EditPlayer}/>
    <Route exact path='/teams' component={Teams}/>
    <Route exact path='/team/:id' component={TeamDetail}/>
    <Route exact path='/team/edit/:id' component={EditTeam}/>
  </Switch>
</Router>
    </div>
  );
}

export default App;
