import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="outlined button group" size='large'>
        <NavLink
          to="/"
          exact
        >
          <Button>Home</Button>
        </NavLink>
        <NavLink to="/pharmacies">
          <Button>Pharmacies</Button>
        </NavLink>
        <NavLink to="/drugs">
          <Button>Drugs</Button>
        </NavLink>
      </ButtonGroup>
    </Box>
  )
}

export default NavBar