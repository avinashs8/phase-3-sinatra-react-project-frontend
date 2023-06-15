import React from 'react'
import AddPharmacy from './AddPharmacy'
import PharmacyDetails from './PharmacyDetails'

function PharmacyList({ pharmacies, setPharmacies }) {

    
   


    const pharmacyList = pharmacies.map(pharmacy => {
        return(
            <PharmacyDetails key={pharmacy.id} pharmacy={pharmacy}/>
        )
    })

   

  return (
    <div>
        <h1>Pharmacy List: </h1>
        {pharmacyList}
        <br/>
        <AddPharmacy pharmacies={pharmacies} setPharmacies={setPharmacies}/>
    </div>
  )
}

export default PharmacyList