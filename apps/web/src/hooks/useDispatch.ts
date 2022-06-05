import { useDispatch as useReduxDispatch } from "react-redux";
import { AppDispatch } from "../state/store";

const useDispatch = () => useReduxDispatch<AppDispatch>();

export default useDispatch;
