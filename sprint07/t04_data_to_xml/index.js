import express from 'express';
import session from 'express-session';
import expressThymeleaf from 'express-thymeleaf';
import path from 'path';
import { TemplateEngine } from 'thymeleaf';
import { data } from './js/dataTest.js';
import { ListAvengerQuotes } from './ListAvengerQuotes.js';
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
    name: 'data_to_xml',
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

app.get('/XML', (req, res) => {
  const com = new ListAvengerQuotes(data);
  res.json({ to: com.toXML(), from: com.fromXML() });
});

app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")})