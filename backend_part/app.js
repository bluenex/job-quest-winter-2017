var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// middleware
app.use(bodyParser.json());

Task = require('./models/task')

// connect to mongoose
mongoose.connect('mongodb://localhost/todoapp', { useMongoClient: true });
var db = mongoose.connection;

// routing
app.get('/', function(req, res) {
    res.send('pls use /api/tasks');
});

// get all tasks
app.get('/api/tasks', function(req, res) {
    Task.getTasks(function(err, tasks){
        if(err){
            throw err;
        }
        res.json(tasks);
    });
});

// add one task
app.post('/api/tasks', function(req, res) {
    var task = req.body;
    console.log(task);
    Task.addTask(task, function(err, task) {
        if(err) {
            throw err;
        }
        res.json(task);
    });
});

// update one task
app.put('/api/tasks/:_id', function(req, res) {
    var id = req.params._id;
    var task = req.body;
    Task.updateTask(id, task, {}, function(err, task) {
        if(err) {
            throw err;
        }
        res.json(task);
    });
});

app.listen(3000);
console.log('running on port 3000...');