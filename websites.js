const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    //  Sync: Header file loaded before anything else
    let HeaderData = fs.readFileSync("html/header.html", 'utf-8');
    let footerData = fs.readFileSync("html/footer.html", 'utf-8'); 

    let file = "/index";
    if (req.url !== '/'&&req.url !== '/styles.css' && req.url !== '/scripts.js') {
        file = req.url;
    }

    // Async: Load HTML file with callback
    if (req.url !== '/styles.css' && req.url !== '/scripts.js') {
        fs.readFile("html" + file + ".html", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("internal server error");
                return false;
            }

            resp.write(HeaderData + "" + data +"" + footerData);
            resp.end();
        });
    } 
    // Serve CSS with correct content-type
    else if (req.url === '/styles.css') {
        fs.readFile("templates/styles.css", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("css not found");
                return false;
            }

            resp.writeHead(200, { "content-type": "text/css" });
            resp.end(data);
        });
    }
    else if(req.url == '/scripts.js') {
        fs.readFile("templates/scripts.js", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("js not found");
                return false;
            }   

            resp.writeHead(200, { "content-type": "text/javascript" });
            resp.end(data);
        });
    }

}).listen(8000);