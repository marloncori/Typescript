
import { Users } from '../models/users.model.ts'
import { v4 } from 'https://deno.land/std/uuid/mod.ts'

let users: Users[] = [
    {
        id: '1',
        firstName: 'Marlon',
        lastName: 'Couto',
        dateOfBirth: '22/09/1986',
        qualification: 'translator'
    },
    {
        id: '2',
        firstName: 'Beniamin',
        lastName: 'Couto-Szalay',
        dateOfBirth: '01/10/2018',
        qualification: 'fireman'
    },
    {
        id: '3',
        firstName: 'Geysa',
        lastName: 'Von Kriiger',
        dateOfBirth: '04/09/1992',
        qualification: 'pharmaceut'
    },
    {
        id: '4',
        firstName: 'Maria',
        lastName: 'Laura',
        dateOfBirth: '01/07/1959',
        qualification: 'nurse'
    },
    {
        id: '5',
        firstName: 'Aniko',
        lastName: 'Szalay',
        dateOfBirth: '10/03/1989',
        qualification: 'teacher'
    }
]

//get Method for all users
// routes GET /api/v1/users
const getUsers = ({response}: {response: any}) => {
     response.body = users
}

//get Method for each user
// routes GET /api/v1/users/{id}

const getSingleUser = ({params, response}: {params: any, response: any}) => {
    const user: Users | undefined = users.find(
            user => user.id === params.id
    )
    if(user){
        response.status = 200
        response.body = {
            success: true,
            data: user
        }
    }
    else {
        response.status = 400
        response.body = {
            success: false,
            msg: " No user found with the provided ID!"
        }
    }
}

const addUser = async ({request, response}: {request: any, response: any}) => {
    const body = await request.body()
    if(!request.hasBody){
        response.status = 400
        response.body = {
            success: false,
            msg: " There is no data to be saved..."
        }
    } else {
        const newUser: Users = body.value
        newUser.id = v4.generate()
        users.push(newUser)

        response.status = 201
        response.body = {
            success: true,
            data: newUser,
            msg: " --> New user has been successfully registered!"
        }
    }
}

const removeUser = ({params, response}: {params: {id: string}, response: any}) => {
     users = users.filter(user => user.id !== params.id)
     response.body = {
         success: true,
         msg: "  User has been safely deleted from register!",
         users: users
     }
}

const updateUser = async ({params, request, response}: 
    {params: {id: string}, request: any, response: any}) => {
    
        const user: Users | undefined = users.find(
        user => user.id == params.id
    )
    if(user){
        const body = await request.body()
        const updateData: {
            firstName?: string
            lastName?: string
            dateOfBirth?: string,
            qualification?: string
        } = body.value
        
        users = users.map(user =>
             user.id == params.id ?
              { ...user, ...updateData} : user    
        )

        response.status = 404
        response.body = {
            status: true,
            data: users,
            msg: " >>> User successfully updated! <<< "
        }
    }
    else {
        response.status = 200
        response.body = {
            status: false,
            msg: " WARNING: No user found on database! "
        }
    }
}

export { getUsers, getSingleUser, addUser, removeUser, updateUser }