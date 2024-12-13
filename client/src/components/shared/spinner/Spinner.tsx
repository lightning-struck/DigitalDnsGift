import React from 'react'
import cn from 'classnames'
import s from './spinner.module.scss'
type SpinnerProps = {
	active: boolean
}
export const Spinner: React.FC<SpinnerProps> = ({ active }) => {
	return (
		<div className={cn(s.spinner_layout, active && s.spinner_layout_active)}>
			<div className={s.spinner_wrapper}>
				<span className={s.loader}></span>
			</div>
		</div>
	)
}
