class Command{
    constructor(method, name, description, args, permissions){
        this.method = method
        this.name = name
        this.description = description
        this.args = args
        this.permissions = permissions
    }

    run(msg, args){
        this.method(msg, args)
        console.log(`${msg.author.tag} ran ${this.name}`)
    }
}

module.exports = Command