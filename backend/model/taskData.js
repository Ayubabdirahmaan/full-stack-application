import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {type: String, require: true},
    discription: String,
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
    dueDate: Date,
    createBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }

},{timestamps: true}
)

const Task = mongoose.model('Task', taskSchema)

export default Task