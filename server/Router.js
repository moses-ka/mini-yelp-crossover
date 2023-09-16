import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';
const router = express.Router();
// api/hello world
router.get('/restaurants', async(req, res) => {
    try {
         const restaurants = await db.collection('restaurants').find({}).toArray();
         res.status(200).send(restaurants);
    } catch (error) {
        console.log(error);
    }
}
);

export default router;