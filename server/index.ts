import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.listen(3005, () => {
    console.log('The application is listening on port 3005!');
})