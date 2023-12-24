/*import type {FC, ReactNode} from 'react' 리액트 17버전*/
import type {FC, PropsWithChildren} from 'react' //리액트 18버전(ReactNode => PropsWithChildren)

/* 컴포넌트 내부에서 children 속성 사용(리액트 17버전) 
export type PProps = {
  children?: ReactNode
}

const P: FC<PProps> = props => {
  const {children} = props
  return <p children={children} />
}*/

//PropsWithChildren 제네릭 타입 사용(리액트 18버전)
export type PProps = {}
const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}

export default P
