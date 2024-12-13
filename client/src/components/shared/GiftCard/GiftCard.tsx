import React, { useState } from 'react'
import styles from './giftCard.module.scss'
import { IGiftCardProps } from './giftCard.interface'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import cn from 'classnames'
import { Cross } from '@/icons/Cross'
export const GiftCard: React.FC<IGiftCardProps> = props => {
	const { icon, price, buttonText, interests, name, image } = props
	const [openModal, setOpenModal] = useState<boolean>(false)
	const wrapperReference = useOutsideClick(() => setOpenModal(false))
	return (
		<>
			<div className={styles.giftCard}>
				<div className={styles.giftIcon}>{icon}</div>
				<p className={styles.giftDate}>{interests[0]}</p>
				<h2 className={styles.giftPrize}>{price} руб.</h2>
				<button
					onClick={() => setOpenModal(true)}
					className={styles.giftButton}
				>
					{buttonText}
				</button>
			</div>
			<div
				ref={wrapperReference}
				className={cn(styles.modal, openModal && styles.modalOpen)}
			>
				<div className={styles.modal_title}>
					{name}
					<button className={styles.close} onClick={() => setOpenModal(false)}>
						<Cross />
					</button>
				</div>
				<div className={styles.image_wrapper}>
					<img className={styles.image} src={image} />
				</div>
			</div>
			<div
				className={cn(styles.layout, openModal && styles.layout_active)}
			></div>
		</>
	)
}
