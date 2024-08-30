import { AppRootState} from './store.ts'

export const appSelectStatus = (state: AppRootState) => state.app.status
export const appError = (state: AppRootState) => state.app.error