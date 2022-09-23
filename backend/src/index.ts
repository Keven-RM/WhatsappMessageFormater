import cors       from 'cors'
import express    from 'express'
import { config } from 'dotenv'

//functions
import router from './routes'

config(); //default configs about dotenv

const app = express();

app.use(cors());
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(`${__dirname}/data/`)); 
app.listen(process.env.PORT || 8021);

console.log("> Online on 8080");