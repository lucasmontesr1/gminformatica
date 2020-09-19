const path = require('path');
const fs = require('fs');



const webController = {
    index: function(req,res){
        res.sendFile(path.resolve(__dirname, '../views/web/index.html'));
        
    },
    contact: function(req,res){
        res.sendFile(path.resolve(__dirname, '../views/web/contact.html'));
        
    }

}
module.exports = webController;