import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'

function AddPharmacy({ pharmacies, setPharmacies }) {

    const [pharmacyToggleForm, setPharmacyToggleForm] = useState(true)
    const [pharmacyName, setPharmacyName] = useState('')

    const handlePharmacyNameChange = e => {
        setPharmacyName(e.target.value)
        
    }

    const handlePharmacySubmit = e => {
        e.preventDefault()
        const params = {
            name: pharmacyName
        }
        fetch("http://localhost:9292/pharmacies", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(data => {
            const allPharmacies = [...pharmacies, data]
            setPharmacies(allPharmacies)
            setPharmacyName('')
            setPharmacyToggleForm(!pharmacyToggleForm)
        })
    }




  return (
    <div>
        <button onClick={() => setPharmacyToggleForm(!pharmacyToggleForm)}>Add Pharmacy</button>
        {pharmacyToggleForm ? null : <form onSubmit={handlePharmacySubmit}>
            <h4>Enter Pharmacy Name</h4>
            <TextField id="outlined-basic" label="Pharmacy Name" variant="outlined" autoFocus={true} value={pharmacyName} onChange={handlePharmacyNameChange}/>
            <br/>
            <Button variant="contained" type='submit'>Submit</Button>
            </form>}
    </div>
  )
}

export default AddPharmacy