class Sample {
    variable: string | number

    constructor(value: string | number){
        this.variable = value
        console.log(" Sample has been instantiated!")
    }
    
    info(): any {
        return `This is your variable: ${this.variable}`
    }
}

const test1 = new Sample(7)
   console.log("\n\t" + test1.info() + "\n")

const test2 = new Sample('Mobile Robotics')
    console.log("\n\t" + test2.info() + "\n")