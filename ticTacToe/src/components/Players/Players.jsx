export default function Players({id = "players", children, ...props}) {
    return (
        <ol id={id} {...props}>
            {children}
        </ol>
    );
}
