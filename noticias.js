var http = require('http');

var server = http.createServer(function(req, res) {

	var categoria = req.url;

	if (categoria == '/tecnologia'){
		res.end("<html><body> Noticias de tecnologia</body></http>");
	} else if (categoria == '/moda'){
		res.end("<html><body> Noticias de moda</body></http>");
	} else if (categoria == '/beleza'){
		res.end("<html><body> Noticias de beleza</body></http>");
	} else {
		res.end("<html><body> Pagina inicial do portal de noticia</body></http>");
	}

});

console.log("TA FUNFANDO PORRA");

server.listen(3000);