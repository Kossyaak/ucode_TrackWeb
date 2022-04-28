const express = require('express');
const session = require('express-session');
const expressThymeleaf = require('express-thymeleaf');
const path = require('path');
const { TemplateEngine } = require('thymeleaf');
import { File } from './File.js';
import { FileList } from './FileList.js';
import {
  hasSession,
  addSession,
  sessionEnd,
  getSessionValue,
} from './js/utils.js';

const app = express();

const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'files',
    secret: 'aboba',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")})

app.get('/', async (req, res) => {
  const files = new FileList();
  if (files.hasFiles()) {
    console.log(JSON.stringify(files.getList()));
    return res.render('index', {
      files: JSON.stringify(files.getList()),
    });
  }
  res.render('index');
});

app.post('/create', async (req, res) => {
  const data = req.body;
  addSession(req, 'a');
  console.log(data);
  new File(data.fileName).write(data.content);
  res.redirect('/');
});

app.post('/delete', async (req, res) => {
  const data = req.body;
  new File(data.deleteFile).delete();
  return res.redirect('/');
});
