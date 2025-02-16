export default function TabButton(props: { children: any, onSelect: Function, isSelected: boolean }) {
    return (
        <li>
            <button className={props.isSelected ? "active" : ''} onClick={props.onSelect}>
                {props.children}
            </button>
        </li>
    )
}
