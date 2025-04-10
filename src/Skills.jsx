import React from 'react';
import { Typography, Box, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Material UI', level: 70 },
];

const Skills = () => {
  return (
    <Box id="skills" py={10}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" color="black" gutterBottom>
          Skills
        </Typography>
        {skills.map((skill) => (
          <Box key={skill.name} my={2}>
            <Typography>{skill.name}</Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{ height: 10, borderRadius: 5 }}
            />
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default Skills;
