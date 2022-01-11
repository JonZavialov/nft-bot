function addInviteForUser(inviter, member){
    let numOfInvites
    if(!userInvites.get(inviter.id)){
        //the inviters first invite
        userInvites.set(inviter.id, [member.id])
    }else{
        userInvites.set(inviter.id, userInvites.get(inviter.id).concat(member.id))
    }
}

module.exports = addInviteForUser