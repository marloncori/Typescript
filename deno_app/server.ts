export{}
import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './controllers/routes.ts'

//port 
const port = 4200
const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(` Listening at port ${port}...`)
await app.listen({ port })