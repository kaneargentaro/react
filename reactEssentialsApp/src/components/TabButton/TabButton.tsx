export default function TabButton(props: {children: any, onSelect: Function}) {
    return (
        <li>
            <button onClick={props.onSelect}>
                {props.children}
            </button>
        </li>
    )
}
