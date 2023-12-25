//클릭 이벤트 처리(물리 DOM 방식)
//onclick 이벤트는 가장 마지막 콜백함수만 호출한다.
const rootDiv = document.getElementById('root')
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles)
  }
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    //prettier-ignore
    console.log('mouse click also occurs on rootDiv', isTrusted, target, bubbles)
  }
}

export default function OnClick() {
  return <div>OnClick</div>
}
