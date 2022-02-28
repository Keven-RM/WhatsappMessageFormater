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

app.listen(process.env.PORT || 8080);


console.log("> Online"); 