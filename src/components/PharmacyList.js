import React from 'react'
import { useState, useEffect } from 'react'
import PharmacyDetails from './PharmacyDetails'

function PharmacyList({ pharmacies }) {

    
    const [addForm, setAddForm] = useState(false)


    const pharmacyList = pharmacies.map(pharmacy => {
        return(
            <PharmacyDetails key={pharmacy.id} pharmacy={pharmacy}/>
        )
    })

   

  return (
    <div>
        Pharmacy List: 
        {pharmacyList}
    </div>
  )
}

export default PharmacyList