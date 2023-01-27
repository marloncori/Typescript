
enum UserRole {
    ADMIN,
    USER
}

function isAdmin(c: string){
    if(c === "admin"){
        return true
    }
    return false
}

const USER = "admin"

console.log(isAdmin(USER))