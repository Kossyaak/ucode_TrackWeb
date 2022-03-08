const normal = require('./normal-router');
const quantum = require('./quantum-router');
const time = normal.calculateTime();
const quantumTime = quantum.calculateTime();
const express = require("express");
 
const app = express();
app.set("view engine", "ejs");

app.use("/quantum", function(request, response){
    response.render('quantum', {
        yearn: time.years(),
        monthn: time.months(),
        dayn: time.days(),
        yearq: quantumTime[0],
        monthq: quantumTime[1],
        dayq: quantumTime[2],
    });
});
app.use("/normal", function(request, response){
    response.render('normal', {
        yearn: time.years(),
        monthn: time.months(),
        dayn: time.days(),
        yearq: quantumTime[0],
        monthq: quantumTime[1],
        dayq: quantumTime[2],
    });
});
app.use("/", function(request, response){
    response.render('index', {
        yearn: time.years(),
        monthn: time.months(),
        dayn: time.days(),
        yearq: quantumTime[0],
        monthq: quantumTime[1],
        dayq: quantumTime[2],
    });
});
app.listen(3000);

