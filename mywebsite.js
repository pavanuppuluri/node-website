var http = require('http');
var fs   = require('fs');
var url  = require('url');
const PORT = process.env.PORT || 5000

http.createServer(function(req,res){
    var q = url.parse(req.url, true);
    var filename = "."+q.pathname;
    
    if(filename == "./")
    {
        filename='./index';
    }

    filename=filename+".html";

    fs.readFile(filename, function(err,data){    
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("Page Not Found");
        }

        res.writeHead(200,{'Content-Type':'text/html'});
        return res.end(data);        
    });


}).listen(PORT);
