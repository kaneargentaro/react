export default function GameOver({winner, resetHandler}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner ? <p>{winner} won</p> : <p>It's a draw</p>}
            <p>
                <button onClick={resetHandler}>Rematch!</button>
            </p>
        </div>

    );
}
