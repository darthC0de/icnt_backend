const connection = require('../database/connection');
const Encrypt = require('../utils/cryptography'); 
module.exports = {
    async index(req, res){
        const companies = await connection('company').select('*');
        return res.status(200).json(companies)
    },
    async create(req, res){
        const { name, login, lpassword, number, email, city, uf} = req.body;
        const whatsapp = "+55" + number;
        password = Encrypt.encrypt(lpassword);
        await connection('company').insert({
                name,
                login,
                password,
                whatsapp,
                email,
                city,
                uf
            });
        return res.status(201).json({message:"Company created"});
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
            await connection('company')
                .where('id',id)
                .delete();
            return res.status(200).json({status:"Deleted"});
        } else {
            return res.status(400).json({
                status: "Failed"
            })
        }
        
    }
    
}