//07-3 express 프레임워크로 API 서버 만들기
import { createServer } from "http";
import { getPublicDirPath } from "./config";
import { makeDir } from "./utils";
import type { MongoDB } from "./mongodb";
import { connectAndUseDB } from "./mongodb";

import { createExpressApp } from "./express";

makeDir(getPublicDirPath()); //public directory 생성

const connectCallback = (db: MongoDB) => {
  const hostname = "localhost",
    port = 4000;

  createServer(createExpressApp(db)).listen(port, () =>
    console.log(`connect http://${hostname}:${port}`)
  );
};

connectAndUseDB(connectCallback, "ch07");

/*   HTTP web server 만들기
createServer((req, res) => {
  console.log('req.url', req.url)
  console.log('req.method', req.method)
  console.log('req.headers', req.headers)
  res.write('Hello World!')
  res.end()
}).listen(port, () => console.log(`connect http://${hostname}:${port}`))*/
