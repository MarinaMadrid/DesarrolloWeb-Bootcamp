require('babel-register')({
    presets: ['env']
});

module.exports = require('./dist/out-tsc/main.js')