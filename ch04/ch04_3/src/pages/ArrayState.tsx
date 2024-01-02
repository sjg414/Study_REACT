//배열 타입 값일 때 useState 훅 사용하기
import {useCallback, useState, useMemo} from 'react'
import {Title, Div} from '../components'
import {Icon} from '../theme/daisyui'
import * as D from '../data'

export default function ArrayState() {
  const [images, setImages] = useState<string[]>([]) //배열 타입 상태 만들기
  const addImage = useCallback(
    //이미지 추가 콜백 구현
    () => setImages(images => [D.randomImage(200, 100, 50), ...images]),
    []
  )
  const clearImages = useCallback(() => setImages(notUsed => []), []) //이미지 클리어 콜백 구현
  const children = useMemo(
    //이미지 의존성 변화 시 콜백 구현
    () =>
      images.map((image, index) => (
        <Div
          key={index}
          src={image}
          className="w-1/5 m-2"
          height="5rem"
          minHeight="5rem"
        />
      )),
    [images]
  )

  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4">
        <div data-tip="add image" className="tooltip">
          <Icon name="add" onClick={addImage} className="mr-12 btn-primary" />
        </div>
        <div data-tip="clear all" className="tooltip">
          <Icon name="clear_all" onClick={clearImages} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}
