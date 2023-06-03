import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DrugForm from './DrugForm';

function PharmacyInventory({ pharmacies }) {
  const { id } = useParams();
  const [pharmacy, setPharmacy] = useState([])
  const [drugLists, setDrugs] = useState("");

  useEffect(() => {
    const pharmacyStore = pharmacies.find((p) => p.id === parseInt(id));
    if (pharmacyStore) {
      const pharmacyDrugs = pharmacyStore.drugs.map((drug) => {
        return (
          <div key={drug.id}>
            <div>{drug.name} {drug.dose} {drug.formulation}</div>
            <div>Quantity: {drug.quantity} Tablets</div>
            <br/>
          </div>
        );
      });
      setDrugs(pharmacyDrugs);
      setPharmacy(pharmacyStore)
    }
  }, [pharmacies, id]);

  
  return (
    <div>
      <h1>Pharmacy Inventory:</h1>
      <h2>{pharmacy.name}</h2>
      <h3>{drugLists}</h3>
      <DrugForm/>
    </div>
  );
}

export default PharmacyInventory;
