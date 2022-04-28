import express from 'express';
import expressThymeleaf from 'express-thymeleaf';
import session from 'express-session';
import path from 'path';
import { TemplateEngine } from 'thymeleaf';
import Hero from './models/user.js';
import bcrypt from 'bcrypt';
import { pool } from './db.js';


const app = express();
const __dirname = path.resolve();
const templateEngine = new TemplateEngine();

app.use('/public', express.static(path.join(__dirname, '/public')));
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/public');
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

app.get('/', (req, res) => {
  if (req.session.user) {
    console.log(req.session);
    res.render('user-account', {
      login: req.session.user.login,
      roles: req.session.user.roles,
    });
    return;
  }
  allLogin();
  res.render('index');
});

app.post('/exit', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.get('/connect', (_, res) => {
  res.render('user-account');
});

app.post('/login', async (req, res) => {
  const { login, password } = req.body;
  let roles = 'User';
  const currentUser = new Hero();
  currentUser.find(login);
  setTimeout(() => {
    if (
      currentUser.login === login &&
      isCorrectPass(password, currentUser.password)
    ) {
      if (admins.includes(login)) {
        roles = 'Admin';
      }
      admins.length = 0;
      req.session.user = { login, roles };
      res.render('user-account', { login, roles });
      return;
    }
    res.render('index', {
      errorLogin: 'User or password uncorrect',
      errorL: 'alert alert-danger',
    });
  }, 10);
});

app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")});
const allLogin = () => {
  pool.query('SELECT name FROM admins', (err, res) => {
    if (err) {
      return;
    }
    res.map(({ name }) => admins.push(name));
  });
};

const isCorrectPass = (pass, hash) => bcrypt.compareSync(pass, hash);
