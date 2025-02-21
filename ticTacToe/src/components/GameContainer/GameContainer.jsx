export default function GameContainer({children, id = "game-container"}) {
    return (
        <div id={id}>
            {children}
        </div>
    );
}
