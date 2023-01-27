export {}

const progmap = new Map<number, string>()

const vals: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
]
const langs: string[] = [
    'C++', 'Python', 'Java', 'Rust', 'Lisp', 'Haskell', 'Erlang', 'Lua',
    'JavaScript', 'Kotlin', 'C', 'C#', 'Go', 'Typescript'
]

for(let i: number = 0; i < 14; i++){
    progmap.set(vals[i], langs[i])
}

for(const j of progmap){
    console.log(j)
}

function getPromise<T>(value: T): Promise<T> {
    return new Promise(
      (res, rej) => setTimeout(
           () => res(value), 3000
        )
     )
}

const value = await getPromise(" Let us use Deno with TypeScript")
console.log(value)

class MyMap extends Map<number, string> {
    constructor(myMap: Map<number, string>){
        super(myMap)
    } 
}

function getMapElement<T extends Map<number, string>>(value: T): Promise<T> {
    return new Promise(
      (res, rej) => setTimeout(
           () => res(value), 2000
        )
     )
}

const newVal = await getMapElement(new Map(progmap))
console.log(newVal)