export interface User {
    id: string;
    name: string;
    email: string; 
  }
  
  export interface Token extends User {
    token: string;
  }
  
  
  export interface SignupInput extends Omit<User, "id"> {
    password: string;
  }
  export interface SignInInput extends Pick<SignupInput, "email" | "password" >{
  
  }
  
  
  export interface ApiRes {
    message?: string[];
  }
  
  export type AppState = {
    returnTo?: string;
    [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  