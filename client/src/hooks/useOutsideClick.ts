import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: () => void) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback()
			}
		}

		document.addEventListener('mouseup', handleClickOutside)
		document.addEventListener('touchend', handleClickOutside)

		return () => {
			document.removeEventListener('mouseup', handleClickOutside)
			document.removeEventListener('touchend', handleClickOutside)
		}
	}, [callback])

	return ref
}

/* 
    Usage

    imports *


    const TestComponent = () => {
    const [open, setOpen] = useState<boolean<(false)
    const wrapperReference = useClickOutside(() => setOpen(false))

    return <div ref={wrapperReference}>Some window</div>
    }

*/
