export default function handler(req, res) {
    const id = req.query.codigo;
    res.status(200).json({
        id,
        nome: `Judite ${id}`,
        email: `judite${id}@ertmail.com.br`
    })
}