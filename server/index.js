import express from 'express';
import cors from 'cors';
import { dbconnect } from './config/db.js';
import dotenv from 'dotenv';
import { createShortUrl, reDirectURL } from './controllers/urlController.js';
dotenv.config();
const app = express();
const router = express.Router();
const desiredPort = process.env.Port || 3000;

app.disable('x-powered-by');
app.use(cors({
    origin: 'https://url-shortener-cyan-seven.vercel.app'
}))
app.use((req, res, next)=>{
    if(req.method !== 'POST') return next();
    if(req.headers['content-type'] !== 'application/json') return next();

    let body ='';
    req.on('data', (chunk)=>{
        body += chunk.toString();
    });

    req.on('end', ()=>{
        const data = JSON.parse(body);
        req.body = data;
        next();
    })
})

app.get('/', (req, res) => {
    res.send({
        message: 'Hello World'
    });
})

app.post('/', createShortUrl);

app.get('/:shortURL', reDirectURL)

app.use('/', router);


app.use((req, res)=>{
    res.status(404).send('<h1>404: Page not found</h1>');
})

app.listen(desiredPort,() => {
    console.log(`Server is running on port ${desiredPort}`);
})
dbconnect();