import React from 'react'
import { useState } from 'react'
import PharmacyDetails from './PharmacyDetails'

function PharmacyList({ pharmacies }) {

    
   


    const pharmacyList = pharmacies.map(pharmacy => {
        return(
            <PharmacyDetails key={pharmacy.id} pharmacy={pharmacy}/>
        )
    })

   

  return (
    <div>
        <h1>Pharmacy List: </h1>
        {pharmacyList}
    </div>
  )
}

export default PharmacyList