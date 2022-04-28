const express = require('express');
const expressThymeleaf = require('express-thymeleaf');
const session = require('express-session');
const path = require('path');
const iconv = require('iconv-lite');
const { TemplateEngine } = require('thymeleaf');

const app = express()

const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + "/views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        name: 'Charset',
        secret: 'aboba',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 100,
        },
    })
);

app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")})

app.get('/', (req, res) => {
    if (!req.body) {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
    res.render('index');
});

app.post('/charset', (req, res) => {
    const text = req.body.text;
    let charset = req.body.selected;
    let newText;
    switch (charset) {
        case 'utf8':
            newText = text;
            charset = 'utf8';
            break;
        case 'Windows-1252':
            newText = iconv.encode(iconv.decode(text, 'utf8'), 'cp1252').toString();
            charset = 'cp1252';
            break;
        case 'ISO-8859-1':
            newText = iconv
                .encode(iconv.decode(text, 'utf8'), 'iso-8859-1')
                .toString();
            charset = 'iso';
            break;
        default:
            throw new Error(`undefined this charset '${charset}'`);
    }
    res.render('index', { input: text, [charset]: newText });
});

