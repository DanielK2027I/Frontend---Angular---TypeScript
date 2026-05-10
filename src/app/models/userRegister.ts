// INTERFACE PARA ENVIAR LOS DATOS 
export interface userRegister {
    username:string,
    password:string,
    rolename:string
}

// INTERFACE PARA GUARDAR LOS DATOS DEL BACKEND
export interface userRegisterResponse {
    username:string,
    id:number,
    rolename:string
}
