import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.json({accept: true})
})

app.listen(port, () => console.log(`Server listening at: http://localhost:${port}`))