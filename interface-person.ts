
interface Person {
    name: string
    readonly age: number //similar to private
    [key: string]: any
    hello(): string
}

let user: Person = {
    name: "Marlon",
    age: 35,
    surname: "Couto Ribeiro",
    hello(): any{
        return `\n Hello, master ${this.name}! \n So you are ${this.age} years old now!`
    }
}

console.log(user.hello())