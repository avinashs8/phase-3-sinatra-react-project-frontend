import '../App.css';
import NavBar from './NavBar';
import Home from './Home';
import PharmacyList from './PharmacyList';
import PharmacyInventory from './PharmacyInventory';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';




function App() {

  const [pharmacies, setPharmacies] = useState([])
  const [drugLists, setDrugs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/pharmacies')
    .then(resp => resp.json())
    .then(data => {
      setPharmacies(data)
        
    })
}, [drugLists])

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/pharmacies'>
          <PharmacyList pharmacies={pharmacies} setPharmacies={setPharmacies}/>
        </Route>
        <Route exact path='/pharmacies/:id'>
          <PharmacyInventory pharmacies={pharmacies} setDrugs={setDrugs} drugLists={drugLists}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
