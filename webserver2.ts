
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const port = 8080;

const handler = (req: Request): Response => {
    const body = ` Your user-agent is ${
        req.headers.get("user-agent") ?? "Unknown"
    }`

    return new Response(body, {status: 200})
}

console.log(`\n HTTP webserver running... \n -> Access it at: http://localhost:8080/`);
await serve(handler, { port })