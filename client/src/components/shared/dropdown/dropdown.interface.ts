export interface IDropdownProps {
	variable: 'hover' | 'click'
	placeholder: string | null
	wrapperClass: string | null
	inputClass: string | null
	placeholderClass: string | null
	listWrapper: string | null
	listClass: string | null
	listItemClass: string | null
	queryParams: boolean
	option: string
	setOption: React.Dispatch<React.SetStateAction<string>>
	listItems: IListItems[]
}

export interface IListItems {
	id?: number
	text: string
	query?: ListItemQuery
}

export interface ListItemProps {
	handleClick: (event: React.MouseEvent<HTMLLIElement>) => void
	text: string
	query?: ListItemQuery
}
interface ListItemQuery {
	[key: string]: string
}
