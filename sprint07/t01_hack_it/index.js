const express = require("express")
const bcrypt = require("bcrypt")
const session = require("express-session")
const expressThymeleaf = require("express-thymeleaf")
const {TemplateEngine} = require("thymeleaf")
const bodyParser = require("body-parser")

const app = express();
const templateEngine = new TemplateEngine()
app.engine("html", expressThymeleaf(templateEngine))
app.set("view engine", "html")
app.set("views", __dirname + "/views")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'password secret',
    saveUninitialized: true
}))
let sess
app.get("/", function (request, response){
    sess = request.session
    if(sess.hash && sess.hash !== ''){
        return response.render('hack',{
            hashPass: sess.hash
        })
    }
    response.render('index')
})

app.post("/",
    function (request, response) {
        if(!request.body) return response.sendStatus(400)
        let password = request.body.password
        let salt = bcrypt.genSaltSync(Number(request.body.salt))
        let encrypted_pass = bcrypt.hashSync(password, salt)
        request.session.hash = encrypted_pass
        console.log(sess.hash)
        response.render('hack', {
            hashPass: encrypted_pass
            }
        )
    })
app.post("/check", function (request, response){
    if(!request.body) return response.sendStatus(400)
    sess = request.session
    console.log(sess.hash)
    if(bcrypt.compareSync(request.body.newPassword, sess.hash)) {
        sess.hash = ''
        response.render("index",{
            answer: "Hacked"

        })
    }
    response.render("hack", {
        answer: "Access denied",
        hashPass: sess.hash
    })
})
app.post('/clear', (request, response) => {
    request.session.hash = ''
    response.redirect('/')
})
app.listen(3000, ()=>{console.log("Сервер запущен по адресу http://localhost:3000")})