//Input 컴포넌트 구현하기
import type {FC, DetailedHTMLProps, InputHTMLAttributes} from 'react'

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type inputProps = ReactInputProps & {}

export const Input: FC<inputProps> = ({className: _className, ...inputProps}) => {
  const className = ['input', _className].join(' ')
  return <input {...inputProps} className={className} />
}
