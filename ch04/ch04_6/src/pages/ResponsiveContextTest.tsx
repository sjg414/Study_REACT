//창 크기 탐지해서 중단점 표시하기
import {Title, Subtitle} from '../components'
import {useResponsive} from '../contexts'

export default function ResponsiveContextTest() {
  const breakpoint = useResponsive()
  return (
    <section className="mt-4">
      <Title>ResponsiveContextTest</Title>
      <div className="mt-4">
        <Subtitle>breakpoint: {breakpoint}</Subtitle>
      </div>
    </section>
  )
}
