const express = require('express');
const router = express.Router();

// Mock data (Replace with database later)
const teamMembers = [
  {
    name: "Sharavana Kumar H",
    role: "Backend Developer",
    img: "4.png",
    description: "Responsible for backend infrastructure using Node.js and Express.js."
  },
  {
    name: "Dhatri",
    role: "Database",
    img: "2.png",
    description: "Manages MongoDB, ensuring secure and efficient data storage."
  },
  {
    name: "Harshini",
    role: "Frontend Developer",
    img: "1.png",
    description: "Focuses on creating dynamic components using React.js."
  },
  {
    name: "Namratha",
    role: "Frontend Developer",
    img: "3.png",
    description: "Works on modern, responsive designs with React.js and Tailwind."
  }
];

router.get('/team', (req, res) => {
  res.json({ success: true, team: teamMembers });
});

router.get('/mission', (req, res) => {
  res.json({
    success: true,
    mission: "Build a decentralized tokenized voting platform that is secure, transparent, and user-friendly."
  });
});

router.get('/about', (req, res) => {
  res.json({
    success: true,
    about: "We are a group of passionate developers competing in a 24-hour hackathon, creating a secure tokenized voting system."
  });
});

module.exports = router;
