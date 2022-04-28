import express from 'express';
import session from 'express-session';
import expressThymeleaf from 'express-thymeleaf';
import { TemplateEngine } from 'thymeleaf';
import path from 'path';
import fetch from 'node-fetch';
import crypto from 'crypto';

const app = express();
const  __dirname = path.resolve();

const templateEngine = new TemplateEngine();
app.use('/public', express.static(path.resolve() + '/'));
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'Marvel',
    secret: 'aboba',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/api', async (req, res) => {
  const KEY_PRIVATE =
    process.env.KEY_PRIVATE ?? 'efc688ebd4aa50c2a0b192251130918c974f615b';
  const KEY_PUBLIC =
    process.env.KEY_PUBLIC ?? 'e3ead0e4edc4942958a8aa71a2c66566';

  const dateNow = Date.now();
  const hashKey = crypto
    .createHash('md5')
    .update(dateNow + KEY_PRIVATE + KEY_PUBLIC)
    .digest('hex');
  res.json(
    await fetch(
      `http://gateway.marvel.com/v1/public/comics?apikey=${KEY_PUBLIC}&hash=${hashKey}&ts=` +
        dateNow
    ).then((response) => response.json())
  );
});

app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")})