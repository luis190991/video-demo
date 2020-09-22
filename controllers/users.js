const express = require('express');

function list(req, res, next) {
  res.send(`los parametros son: ${req.query.id}  y ${req.query.id2}`);
}

function index(req, res, next) {
  const result  = parseInt(req.params.id) + parseInt(req.params.id2);
  res.send(`El resultado es ${result}`);
}

function create(req, res, next) {
  res.send(`los parametros son: ${req.body.id}  y ${req.body.id2}`);
}

function replace(req, res, next) {
  res.send('PATCH /users/ => replace ');
}

function update(req, res, next) {
  res.send('PUT /users/ => update ');
}

function destroy(req, res, next) {
  res.send('DELETE /users/ => destroy ');
}

module.exports = {
  list, index, create, replace, update, destroy
}
