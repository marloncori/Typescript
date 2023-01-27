import { Application } from "https://deno.land/x/oak/mod.ts"
import { homeRouter } from "./controller/routes.ts"
import { authRouter } from "./config/authentication.ts"

const app = new Application()
app.use(homeRouter.routes())
app.use(homeRouter.allowedMethods())

app.use(authRouter.routes())
app.use(authRouter.allowedMethods())

console.log("\n >>> Server is listening on port 8000...")
await app.listen( { port : 8000})
