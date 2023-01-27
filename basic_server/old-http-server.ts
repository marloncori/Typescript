import { serve, Server, ServerRequest } from "https://deno.land/std@0.57.0/http/server.ts"

const server: Server = serve({port: 8000})
console.log("\n >>> Server up and running!\n\t Access it at \'http://localhost:8000/\' ...")

const name: string = Deno.args[0]

for await(const req: ServerRequest of server){
    if(req.url === '/') 
        req.respond({body: `\n\t Hello, master ${name}. How do you like Deno? This syntax was more complex.`})
    if(req.url === '/about')
        req.respond({body: "\n\t You have written this thanks to BootCamp Deno Crash course, sir!"})
}