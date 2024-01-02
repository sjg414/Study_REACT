//1초마다 갱신하는 시계 만들기(lifecycle : component mount ~ unmount)
import {Component} from 'react'
import {Title} from '../components'

export default class ClassLifecycle extends Component {
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer //타입스크립트가 요구하는 구현 방식
  }
  componentDidMount() {
    //컴포넌트 마운트 시
    const duration = 1000
    const intervalId = setInterval(() => this.setState({today: new Date()}), duration) //시간 갱신
    this.setState({intervalId})
  }
  componentWillUnmount() {
    //컴포넌트 언마운트 시
    clearInterval(this.state?.intervalId) //메모리 누수 방지
  }
  render() {
    const {today} = this.state
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4 ">
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
        </div>
      </section>
    )
  }
}
