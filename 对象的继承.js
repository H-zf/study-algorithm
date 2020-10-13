let obj = {}
obj.age = 18 
obj.name = 'hzf'
obj.grow = function () {
    console.log(this.age)
    console.log(this.name)
}

obj.grow()

function Obj () {
    let user = {}
    user.name = 'zhzf'
    user.age = 18
    user.grow = function () {
        return this.name
    }
}

let user1 = new Obj()
let user2 = new Obj()
console.log(user1 === user2)

function Man (constructor,name) {
    console.log('123',constructor)
    this.name = name
}
Man.prototype.sing = function (){
    console.log('sing')
}
let a = new Man('hzf')
// Object.create(Man)

