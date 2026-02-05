const fs = require('fs');

const operation = process.argv[2];
const name = process.argv[3];
const content = process.argv[4];
const fullname = "files/" + name + ".txt";

if (operation == 'write'){
    fs.writeFile(fullname, content,(err)=>{
        if(err){
            Response.end('error occurred');
        }else{
            console.log('file created');
        }
    });
}
else if (operation == "read"){
    fs.readFile(fullname,'utf-8',(err,data)=>{
        if(err){
            Response.end('error occured');
        }
        else {
            console.log(data);
        }

    });
}
else if (operation == 'update'){
    fs.appendFile(fullname,content,(err)=>{
        if(err){
            Response.end('error occured');
        }
        else{
            console.log('file updated');
        }
    });
}
else if (operation == 'delete'){
    fs.unlink(fullname,(err)=>{
        if(err){
            Response.end('error occured');
        }
        else{
            console.log('file deleted');
        }
    });
}
else{
    console.log('invalid operation');
}