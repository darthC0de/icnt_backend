const crypto = require('crypto');

module.exports = {
    encrypt(text){
        var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
        var mystr = mykey.update(text, 'utf8', 'hex')
        mystr += mykey.final('hex');
        return mystr;
    }
}
