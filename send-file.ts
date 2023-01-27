import { readableStreamFromReader } from "https://deno.land/std@0.140.0/streams/mod.ts";

const file = await Deno.open("./logo.svg", { read: true });
const readableStream = readableStreamFromReader(file);

await fetch("https://example.com/", {
    method: "POST",
    body: readableStream
})