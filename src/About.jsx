import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box id="about" py={10}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h2" color="black" gutterBottom>About</Typography>
        <Typography>Welcome to my frontend developer portfolio!</Typography>
      </motion.div>
    </Box>
  );
};

export default About;
