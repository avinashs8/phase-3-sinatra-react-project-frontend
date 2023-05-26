import '../App.css';
import NavBar from './NavBar';
import Home from './Home';
import PharmacyDetails from './PharmacyDetails';
import PharmacyList from './PharmacyList';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';
function App() {

  const [pharmacies, setPharmacies] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/pharmacies')
    .then(resp => resp.json())
    .then(data => {
      setPharmacies(data)  
    })
}, [])

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/pharmacies'>
          <PharmacyList pharmacies={pharmacies}/>
        </Route>
        <Route exact path='/pharmacies/:id' component={PharmacyDetails}/>
      </Switch>
    </div>
  );
}

export default App;
