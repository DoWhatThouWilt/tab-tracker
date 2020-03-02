const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

//read through all the models and set it up to be used with sequelize
fs 
    .readdirSync(__dirname) //read through the current directory and give us an array of different files
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file)) //import file to be used with sequelize
        db[model.name] = model
        
    })

    db.sequelize = sequelize //access to both sequelize objects and models
    db.Sequelize = Sequelize
module.exports = db