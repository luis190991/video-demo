const express = require('express');
const User = require('../models/user');

function list(req, res, next) {
  User.find().then(obj => res.status(200).json({
    message:"Usuarios del sistema",
    objs:obj
  })).catch(err => res.status(500).json({
    message: "No se pueden mostrar los usuarios",
    objs: err
  }));
}

function index(req, res, next) {
  const id  = req.params.id;
  User.findOne({"_id":id}).then(obj => res.status(200).json({
    message:`Usuario del sistema con id ${id}`,
    objs:obj
  })).catch(err => res.status(500).json({
    message: "No se pueden mostrar el usuario.",
    objs: err
  }));
}

function create(req, res, next) {
  let email = req.body.email;
  let name = req.body.name;
  let lastName = req.body.lastName;
  let password = req.body.password;

  let user = new User({
    _email: email,
    _name: name,
    _lastName: lastName,
    _password: password
  });

  user.save().then(obj => res.status(200).json({
    message:'usuario creado correctamente',
    objs: obj
  })).catch(err => res.status(500).json({
    message: "No se pudo almacenar el usuario",
    objs: err
  }));
}

function replace(req, res, next) {
  let id = req.params.id;
  let email = req.body.email ? req.body.email : "";
  let name = req.body.name ? req.body.name : "";
  let lastName = req.body.lastName? req.body.lastName: "";
  let password = req.body.password? req.body.password : "";

  let user = new Object({
    _email: email,
    _name: name,
    _lastName: lastName,
    _password: password
  });

  User.findOneAndReplace({"_id":id}, user).then(obj => res.status(200).json({
    message:`Se actualizó el usuario del sistema con id ${id}`,
    objs:obj
  })).catch(err => res.status(500).json({
    message: "No se pueden actualizar el usuario.",
    objs: err
  }));
}

function update(req, res, next) {
  let id = req.params.id;
  let email = req.body.email;
  let name = req.body.name;
  let lastName = req.body.lastName;
  let password = req.body.password;

  let user = new Object();

  if(email){
    user._email = email;
  }

  if(name) {
    user._name = name;
  }

  if(lastName) {
    user._lastName = lastName;
  }

  User.findOneAndUpdate({"_id":id}, user).then(obj => res.status(200).json({
    message:`Se actualizó el usuario del sistema con id ${id}`,
    objs:obj
  })).catch(err => res.status(500).json({
    message: "No se pueden actualizar el usuario.",
    objs: err
  }));
}

function destroy(req, res, next) {
  const id  = req.params.id;
  User.remove({"_id":id}).then(obj => res.status(200).json({
    message:`Se elimino el usuario del sistema con id ${id}`,
    objs:obj
  })).catch(err => res.status(500).json({
    message: "No se pueden eliminar el usuario.",
    objs: err
  }));
}

module.exports = {
  list, index, create, replace, update, destroy
}
