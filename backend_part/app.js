var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// set static
// app.use(express.static(__dirname+'/client/build'))

// middleware
app.use(bodyParser.json());

Task = require('./models/task')
TaskType = require('./models/taskType')

// connect to mongoose
mongoose.connect('mongodb://localhost/todoapp', { useMongoClient: true });
var db = mongoose.connection;

// routing
app.get('/', function(req, res) {
    res.send('pls use /api/tasks');
});

// TASKS
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
    console.log(req);
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

// update one task
app.delete('/api/tasks/:_id', function(req, res) {
    var id = req.params._id;
    Task.removeTask(id, function(err, task) {
        if(err) {
            throw err;
        }
        res.json(task);
    });
});


// TASK TYPE
// get all task types
app.get('/api/tasktypes', function(req, res) {
    TaskType.getTaskTypes(function(err, tasktypes){
        if(err){
            throw err;
        }
        res.json(tasktypes);
    });
});

// add one task
app.post('/api/tasktypes', function(req, res) {
    var taskType = req.body;
    TaskType.addTaskType(taskType, function(err, taskType) {
        if(err) {
            throw err;
        }
        res.json(taskType);
    });
});

// update one task
app.put('/api/tasktypes/:_id', function(req, res) {
    var id = req.params._id;
    var taskType = req.body;
    TaskType.updateTaskType(id, taskType, {}, function(err, taskType) {
        if(err) {
            throw err;
        }
        res.json(taskType);
    });
});

// update one task
app.delete('/api/tasktypes/:_id', function(req, res) {
    var id = req.params._id;
    TaskType.removeTaskType(id, function(err, taskType) {
        if(err) {
            throw err;
        }
        res.json(taskType);
    });
});

app.listen(6000);
console.log('running on port 6000...');