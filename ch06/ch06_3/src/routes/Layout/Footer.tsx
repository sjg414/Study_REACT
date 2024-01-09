//Footer 컴포넌트 작성
import * as D from '../../data'

export default function Footer() {
  return (
    <footer className="p-4 footer footer-center bg-primary text-primary-content">
      <div>
        <p>Copyrigt 2022 - ALl right reserved by {D.randomCompanyName()}</p>
      </div>
    </footer>
  )
}
