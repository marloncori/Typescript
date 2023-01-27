import { RouterContext } from "https://deno.land/x/oak/mod.ts"
//import { Notes } from "../entity/notes.model.ts"
import { db } from "../resource/mongodb.ts"

/*let notes: Notes[] = [
    {
        id: 1,
        title: "Let us learn how to use DENO",
        contents: " If you are familiar with Node.js runtime, Deno will be a piece of cake. It should try it out ASAP, man!"
    },
    {
        id: 2,
        title: "C++ learning",
        contents: " Master Marlon, do not forget to go on learning how to use <algorithm> library functions!!"
    }
]*/

const notesCollection = db.collection("notes")

const getAllNotes = async (ctx: RouterContext<string>) => {
    const myNotes = await notesCollection.find()
    ctx.response.body = myNotes
}

const createNote = async (ctx: any /*RouterContext<string>*/) => {
    const {value: {title, contents}} = await ctx.request.body()
    const newNote: any = {
        title, contents, date: new Date()
    }
    const ID = await notesCollection.insertOne(newNote)
    console.log(ID)

    newNote._id = ID
    ctx.response.status = 201
    ctx.response.body = newNote
}
export { getAllNotes, createNote }