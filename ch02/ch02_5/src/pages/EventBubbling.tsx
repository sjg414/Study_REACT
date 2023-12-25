//이벤트 버블링(button에서 이벤트가 발생되었지만 버블링에 의해 부모요소인 div에도 전달되어 currentTarget이 바뀜)
import type {SyntheticEvent} from 'react'

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log('click event bubbles on <div>', isTrusted, target, bubbles, currentTarget)
  }
  const onButtonClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log(
      'click event start at <button>',
      isTrusted,
      target,
      bubbles,
      currentTarget
    )
  }
  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  )
}
