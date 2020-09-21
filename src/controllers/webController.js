const path = require('path');
const fs = require('fs');



const webController = {
    index: function(req,res){
        res.sendFile(path.resolve(__dirname, '../views/web/index.html'));
        
    },
    contacto: function(req,res){
        res.sendFile(path.resolve(__dirname, '../views/web/contacto.html'));
        
    }

}
module.exports = webController;