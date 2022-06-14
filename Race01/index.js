const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes');
const app = express();
let http = require("http").Server(app);
let io = require("./controllers/game_manager").listen(http); 
let favicon = require('serve-favicon');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(session({
    name: 'session',
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 1000, // 1hr
    }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.set("port", (process.env.PORT || 3000)); 
app.use((err, req, res, next) => {
    // console.log(err);
    return res.send('Internal Server Error');
});
// User connects to server
app.get("/", function(req, res) {
	// Will serve static pages, no need to handle requests
});

// If any page not handled already handled (ie. doesn't exists)
app.get("*", function(req, res) {
	res.status(404).send("Error 404 - Page not found");
});
http.listen(app.get("port"), function() {
	console.log("Node app started on port http://localhost:%s", app.get("port"));
});
