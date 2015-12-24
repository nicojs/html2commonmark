var grunt = require('grunt');

module.exports = function (cwd) {

    var self = this;
    self.cwd = __dirname + '/' + cwd + '/';

    self.exec = function (command, done, options) {
        console.log('exec: ' + self.cwd + command);
        var args = command.split(' ');
        if (!options) {
            options = {};
        }
        var command = args.shift();
        var opts = {
                cwd: self.cwd,
                env: Object.assign({}, process.env, options.env || {})
            };
        grunt.util.spawn({
            cmd: command,
            args: args,
            opts: opts,
        }, function (error, result, code) {
            if (code !== 0) {
                console.error(String(result));
                console.error(error);
            } else {
                console.log(String(result));
            }
            done(error);
        });
    }



}