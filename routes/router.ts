import { Router, Request, Response } from 'express';

const router = Router();


router.get('/mensaje', ( req: Request, res: Response ) => {
    res.json({
        ok:true,
        mensaje: 'Listo el GET para el server EVA SPA'
    })
});

router.post('/mensaje', ( req: Request, res: Response ) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        cuerpo,
        de
    })
});

export default router;