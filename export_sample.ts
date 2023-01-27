
export class Sensor {
    type: string
    reading: number = Math.random()
    
    constructor(type: string){
        this.type = type
    }

    get_type(){
        return `\n\t SENSOR TYPE: ${this.type}`
    }

    get_reading(){
        return `\t SENSOR READING: ${this.reading}`
    }
}