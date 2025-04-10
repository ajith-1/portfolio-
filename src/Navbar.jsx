import React, { useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
const bars = {
  base: { width: 30, height: 4, backgroundColor: 'black', borderRadius: 10, margin: 4 },
  top: { rotate: 45, y: 8 },
  middle: { opacity: 0 },
  bottom: { rotate: -45, y: -8 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" px={3} py={2} bgcolor="white" position="sticky" top={0} zIndex={1000}>
      <Box component="h1" fontSize="1.5rem" fontWeight="bold">Portfolio</Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <IconButton onClick={toggleDrawer}>
          <Box>
            <motion.div animate={open ? bars.top : {}} style={bars.base} />
            <motion.div animate={open ? bars.middle : {}} style={bars.base} />
            <motion.div animate={open ? bars.bottom : {}} style={bars.base} />
          </Box>
        </IconButton>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
        {navItems.map((item) => (
          <Link key={item} to={item.toLowerCase()} spy={true} smooth={true} duration={500} style={{ cursor: 'pointer', color: 'black', fontWeight: 500 }}>
            {item}
          </Link>
        ))}
      </Box>

      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem button key={item} onClick={toggleDrawer}>
              <Link to={item.toLowerCase()} spy={true} smooth={true} duration={500} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                <ListItemText primary={item} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
