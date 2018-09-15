var mysql = require('mysql');

var connMysql = function () {
		console.log('Conexão com banco estabelecida');
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '1234',
			database : 'portal_noticias'
		});
}

module.exports = function(){
	console.log('Autoload carregou')
	return connMysql;
}