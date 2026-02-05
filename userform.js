function userform(req,resp){
    resp.write(`
        <form action="/submit" method="POST">
            <input type="text" name="username" placeholder="Enter your name"/>
            <input type="text" name="email" placeholder="Enter your email"/>
            <input type="submit" value="Submit"/>
        </form> 
        
        `)
        
}
module.exports = userform;