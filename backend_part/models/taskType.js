var mongoose = require('mongoose');

// task type schema
var taskTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

var TaskType = module.exports = mongoose.model('TaskType', taskTypeSchema);

// get all types
module.exports.getTaskTypes = function(callback, limit) {
    TaskType.find(callback).limit(limit);
};

// add a task
module.exports.addTaskType = function(type, callback) {
    TaskType.create(type, callback);
};

// update a task
module.exports.updateTaskType = function(id, type, options, callback) {
    var query = {_id: id};
    var update = {
        name: type.name
    }
    TaskType.findOneAndUpdate(type, update, options, callback);
}

// remove a task
module.exports.removeTaskType = function(id, callback) {
    var query = {_id: id};
    TaskType.remove(query, callback);
}