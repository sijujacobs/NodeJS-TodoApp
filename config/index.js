var configValues = require('./config');
module.exports = {
    getDbConnectionString:function(){
        return 'mongodb://' + configValues.uname + 
        ':' + configValues.pwd + 
        '@ds157040.mlab.com:57040/nodetododb';
   }
}