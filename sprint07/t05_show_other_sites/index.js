import express from 'express';
import session from 'express-session';
import expressThymeleaf from 'express-thymeleaf';
import { TemplateEngine } from 'thymeleaf';
import path from 'path';
import got from 'got';
import cheerio from 'cheerio';

const app = express();
const __dirname = path.resolve();

const templateEngine = new TemplateEngine();
app.use('/js', express.static(path.resolve() + '/'));
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'Show other sites',
    secret: 'aboba',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.get('/', async (req, res) => {
  const URL = req.query.url;
  if (URL) {
    const responce = await got(URL);
    const $ = cheerio.load(responce.body);
    res.render('index', { urlName: URL, url: $('body').html().trim() });
    return;
  }
  res.render('index', { url: 'Type an URL...' });
});

app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")})
