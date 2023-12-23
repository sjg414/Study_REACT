import {Component} from 'react'

//속성 타입 객체 만들기
export type ClassComponentProps = {
  href: string
  text: string
}

//클래스컴포넌트(속성 포함)로 분리
export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const {href, text} = this.props
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
  }
}
