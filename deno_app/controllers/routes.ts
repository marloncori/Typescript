import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getUsers, addUser, getSingleUser, removeUser, updateUser } from '../repositories/users.ts'

const router = new Router()

router.get('/api/v1/users', getUsers)
         .get('/api/v1/users/:id', getSingleUser)
            .post('/api/v1/users', addUser)
               .delete('/api/v1/users/:id', removeUser)
                  .put('/api/v1/users/:id', updateUser)

export default router 