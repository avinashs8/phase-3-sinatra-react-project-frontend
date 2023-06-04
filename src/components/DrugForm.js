import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function DrugForm({ drugLists, setDrugs }) {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [dose, setDose ] = useState('')
  const [formulation, setFormulation] = useState('')
  const [quantity, setQuantity] = useState('')
  const [ toggleForm, setToggleForm ] = useState(true)

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
    .then(resp => resp.json())
    .then(data => {
        const allDrugs = [...drugLists, data]
        console.log(data)
        console.log(allDrugs)
        setDrugs(allDrugs)
        setName('')
        setDose('')
        setFormulation('')
        setQuantity('')
    })
  }


  return (
    <>
    <button onClick={() => setToggleForm(!toggleForm)}>New Drug</button>
        {toggleForm ? <div>{null}</div> : <form onSubmit={handleSubmit}>
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
        </form>}
    </>
  )
}

export default DrugForm