import {StateCreator} from "zustand"

//Guarda el estado
interface AuthState{
    user: undefined,
    token:undefined | String,
    authStatus: 'pending' | 'auth' | 'not-auth'

}

//Guarda las funciones que modifica el estado
interface Actions{
    login:(email:string,password:string) => Promise<void>;

}


const storeApi: StateCreator<AuthState & Actions> = () => ({
    user:undefined,
    token:undefined,
    authStatus:'pending',

    login: async (email:string,password:string) => {


    }
})