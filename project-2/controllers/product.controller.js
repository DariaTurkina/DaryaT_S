const Todo = require('../models/ product.model');

exports.product_create = function (req, res) {
    let todo = new Todo(
        {
            name: req.body.name,
            status: req.body.status
        }
    );

    todo.save(function (err, next) {
        if (err) {
            return next(err);
        }
        res.send('Todo created successfully')
    })
};

//Simple version, without validation or sanitation
exports.todoes = function (req, res, next) {
    if (req) {
        return next(err);
    } else {
        res.send('Greetings from the Todoes controller!');
    }
};
exports.product_details = function (req, res, next) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        res.send(todo);
    })
};
exports.product_update = function (req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, todo) {
        if (err) return next(err);
        res.send('Todo udpated.');
    });
};
exports.product_delete = function (req, res, next) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};