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
const logins = [];
const emails = [];
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

app.get('/', (_, res) => {
  allLogin();
  res.render('index');
});
app.post('/exit', (_, res) => {
  res.redirect('/');
});

app.get('/connect', (_, res) => {
  res.render('user-account');
});

app.post('/register', async (req, res) => {
  if (!req.body) {
    res.redirect('/');
  }
  const { login, userName, email, password, password_confirmation } = req.body;
  if (logins.includes(login)) {
    res.render('index', {
      errorLogin: 'User with this login already exists',
      errorL: 'alert alert-danger',
    });
  } else if (emails.includes(email)) {
    res.render('index', {
      errorEmail: 'User with this email already exists',
      errorE: 'alert alert-danger',
    });
  } else if (password !== password_confirmation) {
    res.render('index', {
      errorPass: 'Incorrectly entered password!',
      errorP: 'alert alert-danger',
    });
  } else {
    const hashPass = setHash(password);
    const userCreate = new Hero(login, userName, email, hashPass);
    userCreate.save();
    logins.length = 0;
    emails.length = 0;
    res.render('index', {
      completeClass: 'alert alert-success',
      completeMess: 'Registration complete!',
    });
  }
});

app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")});

const allLogin = () => {
  pool.query('SELECT login, email FROM users', (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    res.map(({ login }) => logins.push(login));
    res.map(({ email }) => emails.push(email));
  });
};

const setHash = (password) => {
  const salt = bcrypt.genSaltSync(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const HASH = bcrypt.hashSync(password, salt);
  return HASH;
};
