export {}

const getPromise = () => {
     new Promise((res, rej) => setTimeout(
            () => res("----> 1234567"), 3000))
}


const getMessage = () => {
    new Promise((res, rej) => setTimeout(
           () => res("===> GetPromise has worked!"), 2000))
}


const result = await getPromise()
console.log(result)

//for awai to be used inside a function
// the fuction has te be declared as async
const callback = async () => {
    const result2 = await getMessage()
    console.log(result2)
}

try{
    callback()
}catch(error){
    console.log(error)
}