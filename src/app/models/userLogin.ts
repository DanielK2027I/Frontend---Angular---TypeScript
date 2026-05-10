// INTERFACE PARA ENVIAR LOS DATOS 
export interface userLogin {
    username:string,
    password:string
}

// INTERFACE PARA GUARDAR LOS DATOS DEL BACKEND
export interface userLoginResponse {
    username:string,
    id:number,
    rolename:string,
   
}