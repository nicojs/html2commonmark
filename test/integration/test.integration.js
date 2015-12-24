var Executer = require('./Executor');
var executer = new Executer('module');
var commonmark = require('commonmark');

describe('When the module is installed', function () {

    before(function (done) {
        executer.exec('npm install', done);
    });

    describe('and used from node js', function () {
                
        it('should result work', function (done) {
           executer.exec('grunt mochaTest', done);
        });
    });

    describe('and used from browser', function () {
                
        it('should result work', function (done) {
           executer.exec('grunt karma', done);
        });
    });

});