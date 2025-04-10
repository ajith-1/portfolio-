import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    image: 'https://via.placeholder.com/300',
    desc: 'My personal portfolio.',
  },
  {
    title: 'React App',
    image: 'https://via.placeholder.com/300',
    desc: 'Sample React project.',
  },
];

const Projects = () => {
  return (
    <Box id="projects" py={10}>
      <Typography variant="h2" color="black" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body2">{project.desc}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
