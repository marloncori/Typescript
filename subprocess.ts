export{}

const cmd = ["cmd", "/c", "echo \n\n\t\tHELLO!!"]
const sp = Deno.run({ cmd })

await sp.status()