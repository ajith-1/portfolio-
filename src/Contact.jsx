import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Box id="contact" py={10}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" color="black" gutterBottom>
          Contact
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField label="Name" variant="outlined" />
          <TextField label="Email" variant="outlined" />
          <TextField label="Message" multiline rows={4} variant="outlined" />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
