
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');



var client_config = {
    entry: './client/index.js',
    target: 'web',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'client.js'
    },
    externals: {
        'socket.io': 'io'
    }
};


var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

var server_config = {
    entry: './server/index.js',
    target: 'node',
    node: {
        __dirname: false
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'server.js'
    },
    externals: nodeModules
};


module.exports = [client_config, server_config];
