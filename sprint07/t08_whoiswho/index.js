import express from 'express';
import session from 'express-session';
import csv from 'csv-parser';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { renderTable, getIndex } from './js/renderFile.js';
let csvArray = [];
let sess;

const app = express();
const __dirname = path.resolve();
app.use(
  session({
    name: 'Who is Who',
    secret: 'ba3a',
    saveUninitialized: true,
    resave: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(__dirname + '/html'));
app.use('/js', express.static(__dirname + '/js'));
app.use(multer({ dest: 'uploads' }).single('file'));

app.get('/', (req, res) => {
  res.send(getIndex());
});

app.post('/', (req, res, next) => {
  sess = req.session;
  if (!req.file) {
    res.redirect('/');
  } else {
    sess.file = req.file.path;
    let result = '';
    fs.createReadStream(sess.file)
      .pipe(csv())
      .on('data', (data) => csvArray.push(data))
      .on('end', () => {
        result = renderTable(csvArray);
        res.send(getIndex(result));
      });
  }
});

app.get('/filter', (req, res) => {
  let result = '';
  fs.createReadStream(sess.file)
    .pipe(csv())
    .on('data', (data) => csvArray.push(data))
    .on('end', () => {
      result = renderTable(csvArray, req.query);
      res.send(getIndex(result));
    });
});

app.listen(3000, ()=>{console.log("Сервер запущено за адресою http://localhost:3000")})
