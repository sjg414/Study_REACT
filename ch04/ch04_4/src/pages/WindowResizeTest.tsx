//창 크기를 실시간으로 표시하기
import {Title, Subtitle} from '../components'
import {useWindowResize} from '../hooks'

export default function WindowResizeTest() {
  const [width, height] = useWindowResize()

  return (
    <section className="mt-4">
      <Title>WindowResizeTest</Title>
      <Subtitle className="mt-4">
        width: {width}, height: {height}
      </Subtitle>
    </section>
  )
}