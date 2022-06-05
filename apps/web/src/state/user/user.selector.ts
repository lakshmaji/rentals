import { RootState } from "../store";

export const userSelector = (state: RootState) => state.user;
export const authSelector = (state: RootState) => {
    const user = state.user
    return {
        isAuthenticated : !!user.token,
        token: user.token,
        name: user.name
    }
};
