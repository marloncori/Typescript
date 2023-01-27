
class Address {
    street: string 
    NUMBER: number 
    neighbourhood: string
    city: string
    country: string

    constructor(street: string, NUMBER: number, neighbourhood: string, city: string, country: string){
        this.street = street 
        this.NUMBER = NUMBER 
        this.neighbourhood = neighbourhood
        this.city = city
        this.country = country
    }

    get_address(): any {
        return `${this.street} ${this.NUMBER}, ${this.neighbourhood} - ${this.city}`
    }

    get_nation(): string {
        return `${this.country}`
    }
}

class Person {
    constructor(
        public name: string,
        public readonly age: number,
        public address: Address
    ){}

    show_info(){
        return `\n============================\n  PERSON INFORMATION \n============================\n  NAME: ${this.name}\n  AGE: ${this.age} YEARS OLD\n  ADDRESS: ${this.address.get_address()} \n NATIONALITY: ${this.address.get_nation()} \n===============================\n`
    }
}

class Student extends Person {
    studies: string
    year: string

    constructor(name: string, age: number, address: Address, studies: string, year: string){
        super(name, age, address)
        this.studies = studies
        this.year = year
    }

    get_university(){
        return `\n----------------------------------------\n  STUDIES: ${this.studies} \n  YEAR: ${this.year} \n----------------------------------------\n`
    }
}

const fullname = "Marlon Couto Ribeiro"
const age = 36
const street = "Ul. Kilinskiego 14/"
const number = 5
const neighbourhood = "Trynek"
const city = "Gliwice, Poland"
const country = "Brazil"
const studies = "Robotics at Silesian University"
const year = "second"

const studentAdress = new Address(
    street, number, neighbourhood, city, country)

const learner = new Student(
    fullname, age, studentAdress, studies, year)

    
console.log(learner.show_info())
console.log(learner.get_university())