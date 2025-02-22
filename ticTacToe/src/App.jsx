import {useState} from "react";

import GameContainer from './components/GameContainer/GameContainer.jsx';
import Players from './components/Players/Players.jsx';
import PlayerListItem from "./components/Players/PlayerListItem.jsx";
import GameOver from "./components/GameOver/GameOver.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/Log/Log.jsx";

const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function derivedPlayerPlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function checkWinner(gameBoard) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            return gameBoard[i][0];
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (gameBoard[0][j] && gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j]) {
            return gameBoard[0][j];
        }
    }

    // Check diagonals
    if (gameBoard[0][0] && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        return gameBoard[0][0];
    }

    if (gameBoard[0][2] && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        return gameBoard[0][2];
    }

    // No winner found
    return null;
}

function derivedWinner(gameBoard, gameTurns, players) {
    let winner;
    if (gameTurns.length > 0) {
        let winningPlayer = checkWinner(gameBoard);
        if (winningPlayer) {
            winner = players[winningPlayer];
        }
    }
    return winner;
}

function derivedGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function App() {
    const [players, setPlayers] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);

    const currentPlayer = derivedPlayerPlayer(gameTurns);
    const gameBoard = derivedGameBoard(gameTurns);
    const winner = derivedWinner(gameBoard, gameTurns, players);
    let hasDraw = gameTurns.length >= 9 && !winner;

    function resetHandler() {
        setGameTurns([]);
    }

    function playerNameChangeHandler(symbol, newName) {
        setPlayers((players) => {
            return {
                ...players,
                [symbol]: newName
            };
        })
    }

    function selectSquareHandler(rowIndex, colIndex) {
        // setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
        setGameTurns(previousTurns => {
            let currentPlayer = derivedPlayerPlayer(previousTurns);

            return [
                {
                    square: {row: rowIndex, col: colIndex},
                    player: currentPlayer,
                },
                ...previousTurns
            ];
        })
    }

    return (
        <>
            <main>
                <GameContainer>
                    <Players
                        id="players"
                        className="highlight-player">
                        <PlayerListItem
                            initialName={PLAYERS.X}
                            symbol="X"
                            isActive={currentPlayer === 'X'}
                            onChangeName={playerNameChangeHandler}
                        />
                        <PlayerListItem
                            initialName={PLAYERS.O}
                            symbol="O"
                            isActive={currentPlayer === 'O'}
                            onChangeName={playerNameChangeHandler}
                        />
                    </Players>
                    {(winner || hasDraw) && <GameOver
                        winner={winner}
                        resetHandler={resetHandler}
                    />}
                    <GameBoard
                        onSelectSquare={selectSquareHandler}
                        gameBoard={gameBoard}
                    />
                </GameContainer>
                <Log
                    turns={gameTurns}
                />
            </main>
            {/*<Header*/}
            {/*    title="React Tic-Tac-Toe"*/}
            {/*    image={gameLogo}*/}
            {/*/>*/}
        </>
    );
}

export default App;
