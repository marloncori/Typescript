import { Router } from "https://deno.land/x/oak/mod.ts"

const authRouter = new Router()

authRouter.get("/login", context => {
    context.response.body = "<h1> You should enter your username and password bellow! </h1>"
})

export { authRouter }