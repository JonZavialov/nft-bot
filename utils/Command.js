class Command{
    constructor(method, name, description, alias, args, permissions, argsOptional = false){
        this.method = method
        this.name = name
        this.description = description
        this.args = args
        this.alias = alias
        this.permissions = permissions
        this.argsOptional = argsOptional
    }

    run(msg, args){
        this.method(msg, args)
    }
}

module.exports = Command