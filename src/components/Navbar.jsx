import { AppBar, Box, Toolbar, Typography, IconButton, Drawer } from '@mui/material';
import { useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Navbar() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar className="navbar">
            <PetsIcon className="petsIcon" sx={{ mb: 0.5, fontSize: 30 }} />
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              DogTown
            </Typography>

            {/* Desktop links */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3, alignItems: 'center' }}>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                <Typography variant="link">Home</Typography>
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                <Typography variant="link">About</Typography>
              </NavLink>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                <Typography variant="link">Products</Typography>
              </NavLink>
              <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                <Typography variant="link">Login</Typography>
              </NavLink>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                <Typography variant="link">Register</Typography>
              </NavLink>
            </Box>

            {/* Mobile menu button */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile menu */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} slotProps={{ paper: { sx: { width: '100%' } } }} >
              <Box sx={{ display: 'flex', flexDirection: 'column', p: 3, }} role="presentation">

                {/* Close Button */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>

                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, }}>
                  <NavLink to="/" onClick={toggleDrawer(false)} className={({ isActive }) => isActive ? 'drawer-active' : 'drawer-link'}>
                    <Typography variant="link">Home</Typography>
                  </NavLink>
                  <NavLink to="/about" onClick={toggleDrawer(false)} className={({ isActive }) => isActive ? 'drawer-active' : 'drawer-link'}>
                    <Typography variant="link">About</Typography>
                  </NavLink>
                  <NavLink to="/products" onClick={toggleDrawer(false)} className={({ isActive }) => isActive ? 'drawer-active' : 'drawer-link'}>
                    <Typography variant="link">Products</Typography>
                  </NavLink>
                  <NavLink to="/login" onClick={toggleDrawer(false)} className={({ isActive }) => isActive ? 'drawer-active' : 'drawer-link'}>
                    <Typography variant="link">Login</Typography>
                  </NavLink>
                </Box>

              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>

  );
}
