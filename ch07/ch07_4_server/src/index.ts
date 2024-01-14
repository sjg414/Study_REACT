//7-4 JSON 웹 토큰으로 회원 인증 기능 구현하기
import {createServer} from 'http'
import {getPublicDirPath} from './config'
import {makeDir} from './utils'
import type {MongoDB} from './mongodb'
import {connectAndUseDB} from './mongodb'

import {createExpressApp} from './express'

makeDir(getPublicDirPath()) //public directory 생성

const connectCallback = (db: MongoDB) => {
  const hostname = 'localhost',
    port = 4000

  createServer(createExpressApp(db)).listen(port, () =>
    console.log(`connect http://${hostname}:${port}`)
  )
}

connectAndUseDB(connectCallback, 'ch07')
