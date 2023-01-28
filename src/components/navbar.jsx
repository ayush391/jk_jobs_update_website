import { History, Home, HouseOutlined, RecentActors, Search, Settings } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <AppBar position='fixed' sx={{ top: 'auto', bottom: '0' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <IconButton LinkComponent={Link} to='/'>
                        <HouseOutlined fontSize='large'></HouseOutlined>
                    </IconButton>
                    <IconButton LinkComponent={Link} to='/search'>
                        <Search fontSize='large'></Search>
                    </IconButton>
                    <IconButton>
                        <Settings fontSize='large'></Settings>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar