import  express  from "express";
import cors from 'cors';

const app = express();

app.use( cors( { origin: 'http://localhost:5173' } ) ); 

app.get('/', ( req, res ) => {
    res.send( { message: 'hello server' });
});

app.listen(3009, () => { console.log('hello server') })