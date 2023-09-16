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
http://localhost:3012/api/restaurants/hamburg
router.get('/restaurants/:id', async(req, res) => {
    const id = req.params.id;
 
    try {
        const restaurant = await db.collection('restaurants').find({id: id}).toArray();
        
       
         res.status(200).json(restaurant);
    } catch (error) {
        console.log(error);
    }
}

);
// http://localhost:3012/api/restaurants/city/Berlin
router.get('/restaurants/city/:city', async(req, res) => {
    const city = req.params.city;
 
    try {
        const restaurant = await db.collection('restaurants').find({"location.city": city}).toArray();
        
       
         res.status(200).json(restaurant);
    } catch (error) {
        console.log(error);
    }
}

);
// http://localhost:3012/api/restaurants/tag/French
router.get('/restaurants/tag/:tag', async(req, res) => {
    const tag = req.params.tag;
     try {
        const restaurant = await db.collection('restaurants').find({"tags": tag.charAt(0).toUpperCase()
        + tag.slice(1)}).toArray();
         res.status(200).json(restaurant);
    } catch (error) {
        console.log(error);
    }
}

);

export default router;