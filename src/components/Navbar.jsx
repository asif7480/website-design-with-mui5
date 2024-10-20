import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  
  return (
    <>
        <AppBar position='static'>
            <Toolbar>
                <Box sx={{ flexGrow: 1}}>
                <Typography variant='h6' >
                    Example Landing Page
                </Typography>
                </Box>

                <Box>
                    <Button variant='text' color='inherit'>
                        Login
                    </Button>
                    <Button variant='text' color='inherit'>
                        Logout
                    </Button>
                    
                </Box>
            </Toolbar>
            
        </AppBar>
    </>
  )
}

export default Navbar