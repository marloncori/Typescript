import { Product } from "../models/product.model.ts"

let products: Product[] = [
    {
        id: "1", 
        name: "Raspberry Pi 4",
        description: "Single board computer \n with 8 GB RAM",
        price: 500.00
    },
    {
        id: "2", 
        name: "Radxa Zero",
        description: "Single board computer \n with 4 GB RAM",
        price: 250.00
    },
    {
        id: "3", 
        name: "Intel NUC with i7 processor",
        description: "Mini desktop computer \n with 16 GB RAM",
        price: 800.00
    },
    {
        id: "4", 
        name: "Esp32-s3",
        description: "Microcontroller board \n with 4 MB of Flash memory",
        price: 80.00
    },
    {
        id: "5", 
        name: "Lattepanda v1",
        description: "Single board computer \n with 2 GB RAM and Arduino Due",
        price: 200.00
    }
]

const getAllProducts = async (request: any, response: any) => {
    response.status = 200
    await response.json({
        error: false,
        data: products,
    })
}

const getProduct = async (request: any, response: any) => {
    let foundProduct: Product | undefined = products.find((prod) => prod.id === request.params.id)

    if(foundProduct){
        response.status = 200
        await response.json({
            error: false,
            data: foundProduct,
        })
    } else {
        response.status = 404
        await response.json({
            error: true,
            message: " [WARNING] Searched product not found in database!",
        })
    }
}

const addProduct = async (request: any, response: any) => {
    if(!request.data){
        response.status = 400
        response.json({
            error: true,
            message: " [WARNING] No input data provided!",
        })
    }
    else {
        const product: Product = await request.data
        product.id = Math.random().toString()
        products.push(product)
        response.status = 200
        response.json({
            error: true,
            message: " >>> Product successfully added!",
            data: product,
        })
    }
}

const deleteProduct = async (request: any, response: any) => {
    const idParam: string = await request.params.id
    products = products.filter(p => p.id != idParam)

    response.status = 200
    response.json({
        error: false,
        message: " Product successfully deleted!",
        data: products,
    })
}

const updateProduct = async (request: any, response: any) => {
    const ID = await request.params.id
    const body = await request.data
    const product: Product | undefined = products.find(
        (prod) => prod.id === ID)
    if(product){
       const updatedData: {
           name?: string
           description?: string
           price?: number
       } = body

       products = products.map((prod) => prod.id === ID ?
            {...prod, updatedData} : prod
       )
       response.status = 200
       response.json({
           error: false,
           message: " [INFO] Product successfully updated!",
           data: products,
        })
    } else {
       response.status = 400
       response.json({
           error: true,
           message: " --> Product has not been found!",
        })
    }
}

export { getAllProducts, getProduct, deleteProduct, addProduct, updateProduct }

