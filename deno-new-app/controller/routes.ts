import { Router } from "https://deno.land/x/oak/mod.ts"
import { getAllNotes, createNote /*, getSingleNote, updateNote, removeNote*/ } from "../repository/notes.ts"

const homeRouter = new Router()
homeRouter.get("/", ctx => {
    ctx.response.body = " ~~ Welcome to Notes App! ~~"
})
    .get('/api/notes', getAllNotes)
       //.get('/api/notes/:id', getSingleNote)
         .post('/api/notes', createNote)
           /*.put('/api/notes/:id', updateNote)
             .delete('/api/notes:id', removeNote)*/

export { homeRouter }