const taskModel = require('../models/TaskModels');
const mongoose = require("mongoose");

const createTask = async (req, res) =>{
    const {title, description} = req.body;
    console.log(taskModel);
    try {
        const task = await taskModel.create({title, description});
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const getAllTaks = async(req,res) =>{
    try {
        const tasks = await taskModel.find({});
        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const getSingleTaks = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task Not FOund"});
    }
    try {
        const singleTask = await taskModel.findById(id);
        res.status(200).json(singleTask)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const updateTask = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task Not FOund"});
    }
    try {
        const task = await taskModel.findByIdAndUpdate({_id:id},{ ...req.body});
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteTask = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task Not FOund"});
    }
    try {
        const task = await taskModel.findByIdAndDelete(id);
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
} 
module.exports = {createTask, getAllTaks, getSingleTaks, updateTask, deleteTask}