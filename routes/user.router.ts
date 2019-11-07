import { Router } from 'express';
import { getUsers, createUser, getUser } from '../controllers/user.controller';

const routerUsers = Router();

routerUsers.route('/')
        .get( getUsers )
        .post( createUser);

routerUsers.route('/:userId')
           .get( getUser );

export default routerUsers;