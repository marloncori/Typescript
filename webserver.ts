export{}

const server = Deno.listen({port: 8080})

console.log(` HTTP webserver is running.\n Access it at: https://localhost:8080/`)

const serveHttp = async (conn: Deno.Conn) => {
    //upgrade network connection to an HTTP conn
    const httpConn = Deno.serveHttp(conn)
    //each request sent over http connection will be
    //yielded as an async iterator from the http conn
    for await (const requestEvent of httpConn){
        //the native http server uses the web standard
        //request & response objects
        const body = `Your user agent is:\n\n${
            requestEvent.request.headers.get("user-agent") ?? "Uknown"
        }`
        //requestEvent respondWith method is how we end
        // the response back to the client
        requestEvent.respondWith(
            new Response(body,
                {status: 200,
            }),
        )
    }
}

//connections to the serve will be yielded up to
// as an async iterable
for await (const conn of server){
    //so as not to be blocking I need to handle each
    // connection individually, without awaiting the fuction
    serveHttp(conn)
}