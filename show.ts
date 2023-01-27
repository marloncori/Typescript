import {addWithPi, multWithPi} from './maths.ts'
import { Sensor } from './export_sample.ts'

const x = 23.89
const y = 98.54
const nums = new Array(x, y)

let results: number[] = []

for(const n of nums){
    const w = addWithPi(n, n+1)
    results.push(w)
    const z = multWithPi(n, n+2)
    results.push(z)
}

for(const r of results){
    console.log(`\n The result is ==>> \n\t\'${r}\'`)
}

const mpu6050 = new Sensor("Gyroscope MPU6050")

console.log(mpu6050.get_reading())
console.log(mpu6050.get_type())