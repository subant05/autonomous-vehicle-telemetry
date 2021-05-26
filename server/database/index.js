export default class Database {
    constructor(db){
        this.db = db
    }
    create(){
        this.db.create(...arguments)
        return this;
    }
    read(){
        this.db.read(...arguments)
        return this
    }
    reset(){
        this.db.reset()
        return this
    }
    on(){
        this.db.on(...arguments)
        return this
    }
}