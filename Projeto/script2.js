var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(

    function(req, res) {
            var endereco = req.url;
            var dados = url.parse(endereco, true);
            var arquivo = '.' + dados.pathname;
        
            fs.readFile(arquivo,
                function(err, pagina) {
                    if(err) {
                        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                        res.write('Trabalho JP')
                        res.write('<a href="http://localhost:8080/pagina01.html">Iniciar Trabalho</a>');
                        res.end();
                    }
        
                    else {
                        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                        res.write(pagina);
                        res.end();
                    }
                }
            );
        }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');