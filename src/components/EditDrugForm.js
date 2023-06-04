import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function EditDrugForm({ drugLists, setDrugs, drugId, drug, handleEdit }) {
    const { id } = useParams()
    const [name, setName] = useState(drug.name)
    const [dose, setDose ] = useState(drug.dose)
    const [formulation, setFormulation] = useState(drug.formulation)
    const [quantity, setQuantity] = useState(drug.quantity)
   
  
    const handleNameChange = e => {
      setName(e.target.value)
    }
    const handleDoseChange = e => {
      setDose(e.target.value)
    }
    const handleFormulationChange = e => {
      setFormulation(e.target.value)
    }
    const handleQuantityChange = e => {
      setQuantity(e.target.value)
    }

    
  
    const handleSubmit = e => {
        e.preventDefault();
      
        const params = {
          name: name, 
          dose: dose,
          formulation: formulation,
          quantity: quantity
        };
      
        fetch(`http://localhost:9292/pharmacies/${id}/drugs/${drugId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(data => {
            const updatedList = drugLists.map(d => {
                if (d.id === data.id) {
                    return data
                } else {
                    return d
                }
            })
            setDrugs(updatedList)
            
            
            handleEdit(null)
      })
      
    }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h4>Update Drug Name</h4>
            <TextField id="outlined-basic" label="Update Drug Name" variant="outlined" autoFocus={true} value={name} onChange={handleNameChange}/> 
            <h4>Update Drug Dose</h4>
            <TextField id="outlined-basic" label="Update Drug Dose" variant="outlined" value={dose} onChange={handleDoseChange}/> 
            <h4>Update Drug Formulation</h4>
            <TextField id="outlined-basic" label="Update Drug Formulation" variant="outlined" value={formulation} onChange={handleFormulationChange}/>
            <h4>Update Drug Quantity</h4>
            <TextField id="outlined-basic" label="Update Drug Quantity" variant="outlined" value={quantity} onChange={handleQuantityChange}/>
            
            
            <br />
            <Button variant="contained" type='submit'>Update</Button>
        </form>
    </div>
  )
}

export default EditDrugForm