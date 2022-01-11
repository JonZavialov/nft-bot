const fs = require('fs')

function saveMap(){
    invitesDict = {}
    userInvites.forEach((value, key) => {
        invitesDict[key] = value
    })
    
    fs.writeFile('records.json', JSON.stringify(invitesDict), (err) => {
        if (err) throw err
    })
}

module.exports = saveMap