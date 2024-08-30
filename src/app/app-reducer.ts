export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'DECKS/SET_APP_STATUS': {
      return { ...state, status: action.status }
    }
    case 'DECKS/SET_APP_ERROR': {
      return { ...state, error: action.error }
    }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setAppStatus>|ReturnType<typeof setAppError>
export const setAppStatus = (status: RequestStatusType) => ({
  type: 'DECKS/SET_APP_STATUS', status,
} as const)

export const setAppError=(error:string | null)=>({
  type: 'DECKS/SET_APP_ERROR',
  error
}as const)