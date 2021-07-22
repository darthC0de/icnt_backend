const connection = require('../database/connection');
const Encrypt = require('../utils/cryptography'); 
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index(req, res){
        const companies = await connection('company').select('company_id','name','whatsapp','email','city','uf');
        return res.status(200).json(companies)
    },
    async create(req, res){
        const { name, login, lpassword, number, email, city, uf} = req.body;
        const company_id = generateUniqueId();
        const whatsapp = "+55" + number;
        password = Encrypt.encrypt(lpassword);
        await connection('company').insert({
                company_id,
                name,
                login,
                password,
                whatsapp,
                email,
                city,
                uf
            });
        return res.status(201).json({
            "status":"Company created",
            "data":{
                "company_id":company_id,
                "name":name,
                "number":number,
                "email":email,
                "city":city,
                "uf":uf
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
            const data = await connection('company')
                .where('company_id',id)
                .delete();
                return data == 1 ? res.status(204).send() : res.status(400).json({
                    "error":"Bad request",
                    "message":"Unknown Company id"
                });
        } else {
            return res.status(401).json({
                "error":"Unauthorized",
                "message":"Unknown login or password"
            })
        }
    }    
}