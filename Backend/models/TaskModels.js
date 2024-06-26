const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TaskScheme = new schema (
    {
        title:{
            type:String,
            require: true
        },
        description:{
            type:String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Task", TaskScheme);