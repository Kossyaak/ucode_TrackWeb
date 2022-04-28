const express = require("express")
const app = express();
const urlencodedParser = express.urlencoded({extended: false})
app.get("/", function(request, response){
        response.sendFile(__dirname + "/views/index.views");
})

app.post("/", urlencodedParser, function(request, response){
        if(!request.body) return response.sendStatus(400)
        console.log(request.body)
        let counter = 0
        let id = 0
        if(request.body.SS) counter++
        if(request.body.T) counter++
        if(request.body.Sh) counter++
        if(request.body.F) counter++
        if(request.body.EC) counter++
        if(request.body.O) counter++
        if(request.body.UN) id = 1
        if(request.body.FLA) id = 2
        if(request.body.Ch) id = 3
        if(request.body.IH) id = 4
        if(request.body.OT) id = 5
        response.send(`
        <h1>Session for new</h1>
        <p style="margin-left: 50px">
        name: ${request.body.name}<br>
        alias: ${request.body.alias}<br>
        age: ${request.body.age}<br>
        description: ${request.body.about}<br>
        photo: ${request.body.photo}<br>
        exp: ${counter}<br>
        level: ${request.body.levelofcntrl}<br>
        purpose: ${id}
        </p>
        <form action="/" target="_blank">
        <button>FORGET</button>
        </form>`)
})

app.listen(3000, ()=>{console.log("Сервер запущен по адресу http://localhost:3000")})