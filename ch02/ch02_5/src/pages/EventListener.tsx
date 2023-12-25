//EventListener 이벤트 처리기(이벤트 발생 시 알려주는 역할)
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  //(이벤트, 콜백함수)
  const {isTrusted, target, bubbles} = e
  console.log('mouse click occurs.', isTrusted, target, bubbles) //true, <div>, true
})

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click also occurs.', isTrusted, target, bubbles)
})

export default function EventListener() {
  return <div>EventListener</div>
}
