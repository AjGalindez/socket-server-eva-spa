import { Request, Response } from 'express';
import { connect } from '../classes/database';
import { User } from '../models/user.model';

export async function validateUser(req: Request, resp: Response): Promise<Response> {
    const userLogin: User = req.body;
    const conn = await connect();
    const user = await conn.query('Select * from usuarios where correo = ? AND contrasenia = ? ', [userLogin.correo, userLogin.contrasenia]);
    return resp.json(user[0]);
}


export async function createUser(req: Request, resp: Response): Promise<Response> {
    const newUser: User = req.body;
    const conn = await connect();
    await conn.query('insert into usuarios set ?', [newUser]);
    return resp.json({
        message: 'User Created',
        nombre: newUser.nombre,
        apellido: newUser.apellido
    });
}

export async function getUser(req: Request, resp: Response): Promise<Response> {
    const id = req.params.userId;
    const conn = await connect();
    const user = await conn.query('Select * from usuarios where id= ?', [id]);
    return resp.json(user[0]);
}


// export async function getUsers (req: Request, resp: Response) : Promise<Response>{

//     const conn = await connect();
//     const users = await conn.query('Select * from usuarios');

//     return resp.json(users[0]);
// }

