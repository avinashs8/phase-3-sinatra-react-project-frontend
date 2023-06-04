import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function PharmacyDetails({ pharmacy }) {
  return (
    <div style={{ fontSize: '32px', marginBottom: '30px' }}>
        <NavLink to={`/pharmacies/${pharmacy.id}`} >{pharmacy.name}</NavLink>
    </div>
  )
}

export default PharmacyDetails