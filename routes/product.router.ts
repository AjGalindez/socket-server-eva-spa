import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/product.controller';


const routerProducts = Router();

routerProducts.route('/')
                .get ( getProducts )
                .post( createProduct );


export default routerProducts;