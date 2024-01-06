//Sotre 파일 작성(개발 모드일 때만 기록하도록 설정하기[보안])
import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'

const useLogger = process.env.NODE_ENV !== 'production' //개발 모드 상태

const initializeStore = () => {
  const middleware: any[] = []
  if (useLogger) {
    middleware.push(logger)
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: gDM => gDM().concat(thunk)
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
