import { SignupInput,SignInInput, User, Token, ApiRes } from "../../models/user.model";
import api from "../../utils/api";


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

const service = {
  register,
  login
};

export default service;
