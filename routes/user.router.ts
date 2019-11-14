import { Router } from 'express';
import { createUser, getUser, validateUser } from '../controllers/user.controller';

const routerUsers = Router();

routerUsers.route('/')
        .get( validateUser )
        .post( createUser );

routerUsers.route('/:userId')
        .get(getUser);

export default routerUsers;