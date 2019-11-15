import Server from "./classes/server";
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import routerUsers from "./routes/user.router";
import routerProducts from './routes/product.router';


const server = new Server();


server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json());


server.start();

// CORS
server.app.use( cors({ origin: true, credentials: true}));

// Morgan
server.app.use( morgan('dev'))

// ******************************** Rutas de Servicio *******************************
//Ruta para Users
server.app.use('/user', routerUsers);


// Ruta para los productos
server.app.use('/product', routerProducts);

//server.app.user('/', router)

