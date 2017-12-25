var mongoose = require('mongoose');

// task schema
var taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    isActive: {
        type: Boolean,
        require: true
    }
});

var Task = module.exports = mongoose.model('Task', taskSchema);

// get tasks
module.exports.getTasks = function(callback, limit) {
    Task.find(callback).limit(limit);
};

// add task
module.exports.addTask = function(task, callback) {
    Task.create(task, callback);
};

// update task
module.exports.updateTask = function(id, task, options, callback) {
    var query = {_id: id};
    var update = {
        name: task.name,
        isActive: task.isActive
    }
    Task.findOneAndUpdate(task, update, options, callback);
}