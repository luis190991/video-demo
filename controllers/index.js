const express = require('express');
const async =  require('async');
const bcryp = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user');

const jwtKey = config.get("secret.key");

function hello(req, res, next) {
  res.render('index', { title: 'Mundo' });
}

function login(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  async.parallel({
    user: callback => User.findOne({_email:email})
    .select('_password _salt')
    .exec(callback)
  }, (err, result) => {
    if(result.user){
      bcryp.hash(password, result.user.salt, (err, hash) =>{
        if(hash === result.user.password){
          console.log(jwtKey);
          res.status(200).json({
            "message": res.__('ok.login'),
            "objs":jwt.sign(result.user.id, jwtKey)
          });
        }else{
          res.status(403).json({"message": res.__('err.wrong.password')});
        }
      });
    }else{
      res.status(403).json({"message":res.__('err.wrong.password')});
    }
  });
}

module.exports = {
  hello, login
}
