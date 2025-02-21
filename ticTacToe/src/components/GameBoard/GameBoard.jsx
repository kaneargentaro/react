export default function GameBoard({onSelectSquare, gameBoard}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    //
    // function selectedSquareHandler(rowIndex, colIndex, currentPlayer) {
    //     setGameBoard((previousGameBoard) => {
    //         const updatedGameBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
    //         if (updatedGameBoard[rowIndex][colIndex] === null) {
    //             updatedGameBoard[rowIndex][colIndex] = currentPlayer;
    //             onSelectSquare();
    //             return updatedGameBoard;
    //         } else {
    //             return previousGameBoard
    //         }
    //     });
    // }

    // let gameBoard = initialGameBoard;
    //
    // for (const turn of gameTurns) {
    //     const {square, player} = turn;
    //     const {row, col} = square;
    //     gameBoard[row][col] = player;
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {
                            row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button
                                        onClick={() => onSelectSquare(rowIndex, colIndex)}
                                        disabled={playerSymbol !== null}
                                    >
                                        {playerSymbol}
                                    </button>
                                </li>
                            ))
                        }
                    </ol>
                </li>
            ))}
        </ol>
    )
}
