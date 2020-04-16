const connection = require('../database/connection');
const Encrypt = require('../utils/cryptography'); 
module.exports = {
    async index(req, res){
        const services = await connection('services')
            .join('company','company_id','=','cid')
            .select(
                'services.*',
                'company.name',
                'company.email',
                'company.whatsapp',
                'company.city',
                'company.uf',
            );
        return res.json(services);
    },
    async create(req, res){
        const{ title, description,cid } = req.body;
        
        await connection('services').insert({
            title,
            description,
            cid
        })
        return res.status(201).json({
            status:"Service created"
        })
    }
}