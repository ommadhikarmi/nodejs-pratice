const http = require("http");
const userform = require('./userform');
const userdatasubmit = require('./userdatasubmit');

http.createServer((req,resp)=>{
    //resp.end('hello');
    
    if(req.url == '/'){
        resp.writeHead(200, {'Content-Type': 'text/html'});
        userform(req,resp);
        resp.end();

       
    }else if(req.url == '/submit'){
       
        userdatasubmit(req,resp);
    }
  
    


}).listen(8000, ()=>{
    console.log('server is running at http://localhost:8000');
});