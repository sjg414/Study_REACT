//useMemo 훅으로 Memo 컴포넌트 구현하기(데이터 캐시)
import {Title, Avatar} from '../components'
import * as D from '../data'
import {useMemo} from 'react'

export default function Memo() {
  //prettier-ignore
  const headTexts = useMemo<string[]>(() => [
    'No.', 'Name', 'Job Title', 'Email Adress'
  ], []) //의존성 없음 [](콜백 함수 한번만 호출)

  const users = useMemo<D.IUser[]>(() => D.makeArray(100).map(D.makeRandomUser), [])

  const head = useMemo(
    () => headTexts.map(text => <th key={text}>{text}</th>),
    [headTexts] //의존성 목록 : headTexts(의존성 목록이 바뀔 때 마다 콜백함수 호출)
  )

  const body = useMemo(
    () =>
      users.map((user, index) => (
        <tr key={user.uuid}>
          <th>{index + 1}</th>
          <td className="flex items-center">
            <Avatar src={user.avatar} size="1.5rem" />
            <p className="ml-2">{user.name}</p>
          </td>
          <td>{user.jobTitle}</td>
          <td>{user.email}</td>
        </tr>
      )),
    [users]
  )

  return (
    <div className="mt-4">
      <Title>Memo</Title>
      <div className="overflow-x-auto mt-4 p-4">
        <table className="table table-zebra table-compact w-full">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  )
}
