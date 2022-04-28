import express from 'express';
import session from 'express-session';
import expressThymeleaf from 'express-thymeleaf';
import { TemplateEngine } from 'thymeleaf';
import path from 'path';

const app = express();
const __dirname = path.resolve();

const templateEngine = new TemplateEngine();
app.use('/public', express.static(path.resolve() + '/'));
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'codeil',
    secret: 'amogus',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.get('/', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.render('index');
});
app.get('/views-count', async (req, res) => {
  res.json({ views: req.session.views });
});
app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")})
