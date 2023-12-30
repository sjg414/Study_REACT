//아이콘 컴포넌트 사용하기
import {Icon} from '../../theme/daisyui'

export default function IconTest() {
  const onClick = () => alert('Icon clicked')
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">IconTest</h2>
      <div className="flex items-center justify-around mt-4">
        <Icon
          className="btn-primary btn-lg"
          name="settings"
          onClick={onClick}
          iconClassName={''}
        />
        <Icon
          className="btn-secondary btn-md"
          name="done"
          onClick={onClick}
          iconClassName={''}
        />
        <Icon
          className="btn-accent btn-sm"
          name="menu"
          onClick={onClick}
          iconClassName={''}
        />
        <Icon
          className="btn-success btn-xs"
          name="file_upload"
          onClick={onClick}
          iconClassName={''}
        />
      </div>
    </section>
  )
}
