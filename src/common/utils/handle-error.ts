import { isAxiosError } from 'axios'
import { setAppError } from '../../app/app-reducer.ts'
import { Dispatch } from 'redux'

export const handleError = (err: any, dispatch: Dispatch) => {
  let errorMessage: string
  if (isAxiosError<ServerError>(err)) {
    errorMessage = err.response ? err.response.data.errorMessages[0].message : err.message
  } else {
    errorMessage = (err as Error).message
  }
  dispatch(setAppError(errorMessage))
}


type ServerError = {
  errorMessages: Array<{ field: string, message: string }>
}
