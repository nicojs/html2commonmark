var Executer = require('./Executor');
var executer = new Executer('module');
var commonmark = require('commonmark');

describe('When the module is installed', function () {

    before(function (done) {
        executer.exec('npm install', done);
    });

    describe('and used from node js', function () {
                
        it('should result in the same file', function () {
           executer.exec('node readme.js');
        });
    });

});