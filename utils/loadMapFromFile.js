function loadMapFromFile(records){
    global.userInvites = new Map()
    for(let key in records){
        global.userInvites.set(key, records[key])
    }
}

module.exports = loadMapFromFile