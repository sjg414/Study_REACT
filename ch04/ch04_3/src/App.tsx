//04-3 useState 훅 이해하기(가변 상태를 캐시)
import NumberState from './pages/NumberState'
import InputTest from './pages/InputTest'
import ShowHideModal from './pages/ShowHideModal'
import RadioInputTest from './pages/RadioInputTest'
import HigerOrderRadioInputTest from './pages/HigherOrderRadioInputTest'
import BasicForm from './pages/BasicForm'
import ObjectState from './pages/ObjectState'
import ArrayState from './pages/ArrayState'

export default function App() {
  return (
    <div>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigerOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </div>
  )
}
