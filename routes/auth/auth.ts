import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Auth home page');
});

router.get('/login', (req, res) => {
    res.send('You are trying to login');
});

module.exports = router;