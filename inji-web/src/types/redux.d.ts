import {reduxStore} from "../redux/reduxStore";

export type RootState = ReturnType<typeof reduxStore.getState>
