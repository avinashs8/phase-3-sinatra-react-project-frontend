import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function DrugForm() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [dose, setDose ] = useState('')
  const [formulation, setFormulation] = useState('')
  const [quantity, setQuantity] = useState('')

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
    e.preventDefault()
    const params = {
      name: name, 
      dose: dose,
      formulation: formulation,
      quantity: quantity
    }
    fetch(`http://localhost:9292/pharmacies/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        
  }


  return (
    <>
    <div>New Drug</div>
        <form onSubmit={handleSubmit}>
            <h4>Enter Drug Name</h4>
            <TextField id="outlined-basic" label="Drug Name" variant="outlined" autoFocus={true} value={name} onChange={handleNameChange}/> 
            <h4>Enter Drug Dose</h4>
            <TextField id="outlined-basic" label="Drug Dose" variant="outlined" value={dose} onChange={handleDoseChange}/> 
            <h4>Enter Drug Formulation</h4>
            <TextField id="outlined-basic" label="Drug Formulation" variant="outlined" value={formulation} onChange={handleFormulationChange}/>
            <h4>Enter Drug Quantity</h4>
            <TextField id="outlined-basic" label="Drug Quantity" variant="outlined" value={quantity} onChange={handleQuantityChange}/>
            
            
            <br />
            <Button variant="contained" type='submit'>Submit</Button>
        </form>
    </>
  )
}

export default DrugForm