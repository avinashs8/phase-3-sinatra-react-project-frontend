import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function PharmacyDetails({ pharmacy }) {
  return (
    <li>
        <NavLink to={`/pharmacies/${pharmacy.id}`}>{pharmacy.name}</NavLink>
    </li>
  )
}

export default PharmacyDetails