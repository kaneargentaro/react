export default function Log({turns}) {
    return (
        <ol id="log">
            {
                turns.map((turn, index) => (
                    <li key={`${turn.square.row}${turn.square.col}`}
                        className={index === 0 ? 'highlighted' : undefined}>
                        {turn.player} selected square [{turn.square.row}, {turn.square.col}]
                    </li>
                ))
            }
        </ol>
    );
}
