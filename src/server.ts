import express from 'express';
import router from './routers/User.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/users', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});