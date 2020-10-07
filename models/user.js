const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _email:String,
  _name:String,
  _lastName:String,
  _password:String
});

class User {

  constructor(email, name, lastName, password){
    this._email = email;
    this._name = name;
    this._lastName = lastName;
    this._password = password;
  }

  get email(){
    return this._email;
  }

  set email(v){
    this._email = v;
  }

  get name(){
    return this._name;
  }

  set name(v){
    this._name = v;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(v){
    this._lastName = v;
  }

  get password(){
    return this._password;
  }

  set password(v){
    this._password = v;
  }

}

schema.loadClass(User);
module.exports = mongoose.model('User', schema);
