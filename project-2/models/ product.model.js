const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    name: {type: String, required: true, max: 100},
    status: {type: Boolean, required: true}
});


// Export the model
module.exports = mongoose.model('Todo', TodoSchema);