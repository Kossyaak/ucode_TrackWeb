import express from 'express';
import expressThymeleaf from 'express-thymeleaf';
import session from 'express-session';
import path from 'path';
import { TemplateEngine } from 'thymeleaf';
import { routPages } from './rout-page.js';


const app = express();
const __dirname = path.resolve();
const templateEngine = new TemplateEngine();
app.use('/public', express.static(path.join(__dirname, '/public')));
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: 'amogus',
    secret: 'amogus',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

routPages(app);
app.all('*', (req, res) => {
  res.status(404).render('page-404');
});

app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")})
