export interface IUser{
    email:string;
    password:string;
    firstname: string;
    lastname: string;
}

export interface ILogin{
    email:string;
    password:string;
}

export interface ISignUp{
    email: string;
    firstname:string;
    lastname?:string;
    password:string;
}