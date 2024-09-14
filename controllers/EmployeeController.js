const { response } = require('express')
const Employee = require('../models/Employee')
const { set } = require('mongoose')

//Show the list of Employee

const index = (req, res, next)=>{
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured'
        })
    })
}

//show single employee
const show = (req, res, next)=>{
    let EmployeeID = req.body.EmployeeID
    Employee.findById(EmployeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}


//add new employee
const store = (req, res, next) =>{
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    })
    employee.save()
    .then(response => {
        res.json({
            message: 'Employee Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

// updates an employee
const update = (req, res, next) =>{
    let EmployeeID = req.body.EmployeeID

    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    }

    Employee.findByIdAndUpdate(EmployeeID, {$set: updatedData})
    .then(()=> {
        res.json({
            message: 'Employee updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

// delete an employee

const destroy = (req, res, next) => {
    let EmployeeID = req.body.EmployeeID

    Employee.findOneAndDelete(EmployeeID)
    .then(() =>{
        res.json({
            message: 'Employee delete successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}


module.exports = {
    index,show, store, update, destroy
}
