//고차 함수로 라디오 버튼 선택 로직 구현하기
import {useMemo, useCallback, useState} from 'react'
import {Title, Subtitle} from '../components'
import * as D from '../data'

export default function RadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), []) //4개의 jobtitle 배열 저장, 의존성목록 없으므로 한번만 실행
  const [selectedIndex, setSelectedIndex] = useState<number>(0) //초기값 0번째 인덱스
  const onChange = useCallback(
    //고차 함수 형태로 구현
    (index: number) => () => setSelectedIndex(notUsed => index),
    []
  )
  const radioInputs = useMemo(
    //의존성 목록의 값 변경 시 콜백 함수 호출
    () =>
      jobTitles.map((value, index) => (
        <label key={index} className="flex justify-start cursor-pointer label">
          <input
            type="radio"
            name="higher jobs"
            className="mr-4 radio radio-primary"
            checked={index === selectedIndex}
            onChange={onChange(index)}
          />
          <span className="label-text">{value}</span>
        </label>
      )),
    [jobTitles, selectedIndex, onChange]
  )

  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="flex flex-col justify-center mt-4 ">
        <Subtitle>What is your job?</Subtitle>
        <Subtitle className="mt-4">Selected Job: {jobTitles[selectedIndex]}</Subtitle>
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">{radioInputs}</div>
        </div>
      </div>
    </section>
  )
}
