import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DrugForm from './DrugForm';

function PharmacyInventory({ pharmacies }) {
  const { id } = useParams();
  const [pharmacy, setPharmacy] = useState(null);
  const [drugLists, setDrugs] = useState([]);

  useEffect(() => {
    const pharmacyStore = pharmacies.find((p) => p.id === parseInt(id));
    if (pharmacyStore) {
      const pharmacyDrugs = pharmacyStore.drugs.map((drug) => ({
        id: drug.id,
        name: drug.name,
        dose: drug.dose,
        formulation: drug.formulation,
        quantity: drug.quantity,
        pharmacy_id: drug.pharmacy_id,
      }));
      setDrugs(pharmacyDrugs);
      setPharmacy(pharmacyStore);
    }
  }, [id, pharmacies]);

  return (
    <div>
      <h1>Pharmacy Inventory:</h1>
      {pharmacy && (
        <>
          <h2>{pharmacy.name}</h2>
          <h3>
            {drugLists.map((drug) => (
              <div key={drug.id}>
                <div>{drug.name} {drug.dose} {drug.formulation}</div>
                <div>Quantity: {drug.quantity} Tablets</div>
                <br />
              </div>
            ))}
          </h3>
          <DrugForm drugLists={drugLists} setDrugs={setDrugs} />
        </>
      )}
    </div>
  );
}

export default PharmacyInventory;


