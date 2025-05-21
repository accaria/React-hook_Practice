import { useDispatch, UseDispatch, UseSelector, useStore } from "react-redux";
import { AppStore, RootState, AppDispatch } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();