const querystring = require('querystring');


function userdatasubmit(req,resp){

    let dataBody =[];
            req.on('data', chunk =>{
            dataBody .push(chunk);

            });

            req.on('end',()=>{                    // terminal
                let rawData = Buffer.concat(dataBody).toString();
                let readableData =querystring.parse(rawData);
               // console.log(readableData);
               resp.writeHead(200,{'content-type':'text/html'});
                resp.end(`
                    <h1>form submitted</h1>
                    <p>name: ${readableData.username}</p>
                    <p>email: ${readableData.email}</p>
                `);
        
            });
                
}
module.exports = userdatasubmit;