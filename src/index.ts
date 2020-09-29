import express from 'express';
import bodyparser from 'body-parser';
import path from 'path';
import { usersRouter } from './routes/users';
import { userRouter} from './routes/user';

let app = express();

app.use(bodyparser.urlencoded( {extended:false}));
app.use(express.static(path.join(process.cwd(),'public')));

app.use('/user', userRouter);
app.use(usersRouter);

app.listen(3000);