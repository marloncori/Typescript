import * as express from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts"
import { getAllProducts, getProduct, addProduct, deleteProduct, updateProduct } from "./controllers/products.ts"

// wrap the whole thing in a function that executes itself--> (.....) ()
(async () => {
  const port = 3000
  const app = new express.App()
  app.use(express.bodyParser.json())

  app.get("/api/products", getAllProducts)
  app.get("/api/products/{id}", getProduct)
  app.post("/api/products", addProduct)
  app.put("/api/products/{id}", updateProduct)
  app.delete("/api/products/{id}", deleteProduct)
  //create a server afrom the app
  const server = await app.listen(port)
  console.log("\n\tServer upp and running on port: ", server.port) 
})()

// run it with: deno run --allow-net server.ts