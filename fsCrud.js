const fs = require("fs");

const operation = process.argv[2];
const name = process.argv[3];
const content = process.argv[4];
const fullname ="files/"+ name +".txt";

    if(operation == 'write'){
        fs.writeFileSync(fullname,content);
        console.log('file has  been  created');
    
    }else if (operation == 'read'){
       let data = fs.readFileSync(fullname,'utf-8');
       console.log(data);
    }

    else if (operation == 'update'){
        let data = fs.appendFileSync(fullname,content);
        console.log('file ha been updated');
    }

    else if (operation == 'delete'){
        fs.unlinkSync(fullname);
        console.log('file has been deleted');
    }
    
    else{
        console.log('invalid operation');
    }