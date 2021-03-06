const path = require('path')
const express = require('express')
const cwd = require('./cwd')

module.exports = (app, config) => {

    app.locals.config = config
    app.locals.espresso = {}
    app.locals.espresso.site = config.site
    app.locals.espresso.basedir = app.get('views')

    app.set('views', path.join(cwd, 'layouts'))
    app.use('/assets', express.static(path.join(cwd, 'assets')))

}
