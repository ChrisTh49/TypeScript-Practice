import express from 'express';
import diaryRouter from './routes/diaries'

const app = express();

app.use(express.json());

app.use('/api/diaries', diaryRouter);

app.get('/ping', (_req, res) => {
    res.json({
        message: "pong"
    });
});

app.listen(3000, () => {
    console.log("The app is running");
});