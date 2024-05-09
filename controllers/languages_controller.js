const express = require('express')
const languages = express.Router()
const Language = require('../models/language.js')
const seedData = require('../languages/seed.js')

languages.get('/seed', (req, res) => {
    Language.insertMany(seedData)
        .then(createdLanguages => {
            res.json({
                message: "Seed successful!"
            })
        })
})

// Index:
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})

// Show:
languages.get('/:name', (req, res) => {
    Language.findOne({ name: req.params.name .toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage)
        })
})


module.exports = languages
