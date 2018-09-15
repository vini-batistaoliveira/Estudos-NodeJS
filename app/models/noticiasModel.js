module.exports = function(){

	this.getNoticias = function(connection, callback){
		connection.query('SELECT * FROM noticias', callback);
	}

	this.getNoticia = function(connection, callback){
		connection.query('SELECT * FROM noticias where id_noticia = 3', callback);
	}

	this.salvarNoticia = function(noticia, connection, callback){
		connection.query('INSERT INTO noticias SET ?', noticia, callback);
	}

	return this;

}