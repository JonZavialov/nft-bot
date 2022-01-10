function getAllCommands(){
    var requireDir = require('require-dir')
    var commands = requireDir('../commands')
    return commands
}

module.exports = getAllCommands