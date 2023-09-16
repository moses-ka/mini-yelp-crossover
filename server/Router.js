import express from 'express';
import dotenv from 'dotenv';
const router = express.Router();

// api/hello world
router.get('/hello world', (_req, res) => {
    res.send("hello world !");
}
);

export default router;