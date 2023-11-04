import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { registerRoute } from './routes/registerRouter';
import { loginRoute } from './routes/loginRouter';
import { createTodoRouter } from './routes/createTodoRouter';
import { retrieveTodosRouter } from './routes/retrieveTodosRouter';
import { deleteTodoRouter } from './routes/deleteTodoRouter';
import { updateTodoRouter } from './routes/updateTodoRouter';
dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(cors({origin:true}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/', registerRoute)
app.use('/', loginRoute)
app.use('/', createTodoRouter)
app.use('/', retrieveTodosRouter)
app.use('/', deleteTodoRouter)
app.use('/', updateTodoRouter)

app.get('/', (req, res) => {
  res.send('Hello Tech Hive!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});