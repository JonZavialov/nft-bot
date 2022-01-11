function subtractInviteForUser(memberID){
    userInvites.forEach(inviter => {
        //inviter = members who joined from the inviter
        if(inviter.includes(memberID)){
            inviter.splice(inviter.indexOf(memberID), 1)
        }
    })
}

module.exports = subtractInviteForUser