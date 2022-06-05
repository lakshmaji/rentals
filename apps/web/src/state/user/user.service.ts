import { SignupInput,SignInInput, User, Token, ApiRes } from "../../models/user.model";
import api, { addToken } from "../../utils/api";


const register = (payload: SignupInput): Promise<User & ApiRes> => {
  return api<any, SignupInput>(
    "POST",
    "/register",
    payload
  );
};

const login = (payload: SignInInput): Promise<Token & ApiRes> => {
  return api<any, SignInInput>(
    "POST",
    "/login",
    payload
  );
};

const me = (token: string) => (): Promise<User> => {
  return api<any, any>(
    "GET",
    "/user",
    addToken(token)
  );
};

const service = {
  register,
  login,
  me
};

export default service;
