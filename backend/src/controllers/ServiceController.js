const connection = require('../database/connection');
const Encrypt = require('../utils/cryptography'); 
const generateUniqueId = require('../utils/generateUniqueId');

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
        return res.status(200).json(services);
    },
    async create(req, res){
        const{ title, description,cid } = req.body;
        const service_id = generateUniqueId();
        await connection('services').insert({
            service_id,
            title,
            description,
            cid
        })
        return res.status(201).json({
            "status":"Service created",
            "data":{
                "service_id":service_id,
                "title":title,
                "description":description,
                "company_id":cid,
            }
        });
    },
    async delete(req, res){
        const {id} = req.body;
        const {login, lpassword} = req.headers;
        
        const user = await connection('company')
            .where('login',login)
            .select('login','password')
            .first();
        password = Encrypt.encrypt(lpassword);
        if( login == user.login && password == user.password){
            const data = await connection('services')
                .where('service_id',id)
                .delete();
            console.log(data)
            return data == 1 ? res.status(204).send() : res.status(400).json({
                "error":"Bad request",
                "message":"Unknown service id"
            });
        } else {
            return res.status(401).json({
                "error":"Unauthorized",
                "message":"Unknown login or password"
            })
        }
    }
}