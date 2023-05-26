import '../App.css';
import NavBar from './NavBar';
import Home from './Home';
import PharmacyDetails from './PharmacyDetails';
import PharmacyList from './PharmacyList';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/pharmacies'>
          <PharmacyList />
        </Route>
        <Route exact path='/pharmacies/:id' component={PharmacyDetails}/>
      </Switch>
    </div>
  );
}

export default App;
