import express from 'express';
const router= express.Router();

router.get('/', (req, res)=>{
    res.send('products get route');
})
export const ProductRoutes= router;