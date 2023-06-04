import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DrugForm from './DrugForm';
import EditDrugForm from './EditDrugForm';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function PharmacyInventory({ pharmacies }) {
  const { id } = useParams();
  const [pharmacy, setPharmacy] = useState(null);
  const [drugLists, setDrugs] = useState([]);
  const [toggleEditForm, setToggleEditForm] = useState(false)
  

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
  }, [ pharmacies, id]);

  function handleDelete(drugID){
    console.log(drugID)
    fetch(`http://localhost:9292/pharmacies/${id}/drugs/${drugID}`, {
      method:'DELETE',
    })
    .then(resp => resp.json())
    .then(() => {
      const drugsAfterDelete = drugLists.filter( d => d.id !== drugID
      )
      setDrugs(drugsAfterDelete)
    })
  }

  function handleEdit(drugID) {
    setToggleEditForm(drugID);
  }

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
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button variant="outlined" onClick={()=> handleDelete(drug.id)}>
                    Delete
                  </Button>
                  <Button variant="contained" onClick={() => handleEdit(drug.id)} >
                    Edit
                  </Button>
                </Stack>
                <br />
                {toggleEditForm === drug.id ? <EditDrugForm drugLists={drugLists} setDrugs={setDrugs} drugId={drug.id} drug={drug}/> : null}
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


