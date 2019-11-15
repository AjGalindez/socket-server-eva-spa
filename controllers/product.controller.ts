import { Request, Response } from 'express';
import { connect } from '../classes/database';
import { Product } from '../models/product.model';

export async function getProducts( req: Request, resp: Response ) : Promise<Response> {
    const conn = await connect();
    const products = await conn.query('select * from productos');

    return resp.json(products[0]);
}

export async function createProduct( req: Request, resp: Response ) : Promise<Response> {
    const newProduct: Product = req.body;
    const conn = await connect();
    conn.query('insert into productos set ?',[newProduct]);
    return resp.json({
        mensaje: 'Producto creado',
        nombre: newProduct.nombre
    })
}