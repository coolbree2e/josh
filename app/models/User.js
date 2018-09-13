// this is where the user name and password are posted to mysql
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                isEmail: true
            }
          },
        password: {
            type: DataTypes.STRING,
            allownull: false,
        },   
        name:{
            type: DataTypes.STRING,
            allownull: true
        },
        health: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        lightAttack: {
          type: DataTypes.INTEGER,
          allownull: true
        },
        medAttack:{
          type: DataTypes.INTEGER,
          allownull: true
        },
        heavyAttack: {
          type: DataTypes.INTEGER,
          allownull: true
        },
        lightRemaing:{
          type: DataTypes.INTEGER,
          allownull: true
        },
        mediumRemaing:{
          type: DataTypes.INTEGER,
          allownull: true
        },
        heavyRemaing: {
          type: DataTypes.INTEGER,
          allownull: true
        }
       
    });
    return User;
  };
  
  
  
  