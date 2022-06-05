import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
  } from "react-redux";
  import { RootState } from "../state/store";
  
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  
  export default useSelector;
  