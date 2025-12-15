import { Router } from "express";

const GREETING = [
  "A Star is Born with Speed",
  "The Dawn of a New Automotive Era",
  "Redefining Power & Elegance",
  "Where Innovation Meets the Road",
  "Crafted for the Bold and the Brave",
];

const router = Router();

// Route handler for GET /
router.get("/", (req, res) => {
  const randomGreeting = GREETING[Math.floor(Math.random() * GREETING.length)];
  res.json({ greeting: randomGreeting });
});

export default router;
