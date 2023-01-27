export{}

const path = Deno.args[0]
console.log(` This is the provided path: ${path}`)

const contents: string = await Deno.readTextFile(path)
console.log(` This is the contents: \n\t${contents}`)

//or const contents: string = Deno.readTextFileSync(path)