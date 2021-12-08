import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Navigation from './components/List/Navigation';
import Home from './views/Home/Home';
import PlayerDetail from './views/Players/PlayerDetail';
import Players from './views/Players/Players';
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
    <Route exact path='/teams' component={Teams}/>
    <Route exact path='/team/:id' component={TeamDetail}/>
  </Switch>
</Router>
    </div>
  );
}

export default App;
