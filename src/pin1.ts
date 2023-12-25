import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'GET /pin1' });
});

router.post('/', (req, res) => {
    res.json({ message: 'POST /pin1' });
});

export { router as pin1Router };