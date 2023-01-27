
class Robot {
    name: string
    wheels: number
    turned_on: boolean

    constructor(name: string, wheels: number, turned_on: boolean){
        this.name = name
        this.wheels = wheels
        this.turned_on = turned_on
    }

    get_info() : string {
        return `\n=========================\n  ROBOT INFORMATION \n=========================\n  NAME: ${this.name}\n  WHEELS: ${this.wheels}\n  IS ON: ${this.turned_on} \n=========================\n`
    }
}

const robot = new Robot("RM-347", 3, true)

console.log(robot.get_info())