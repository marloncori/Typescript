import { serve } from "https://deno.land/std@0.140.0/http/server.ts"

serve(() => new Response("\n\t Hello, master Marlon. How do you like Deno?"))
console.log("\n >>> Server up and running!\n\t Access it at \'http://localhost:8000/\' ...")

