import {useState} from "react";

export default function PlayerListItem({
                                           initialName,
                                           symbol,
                                           nameClassName = "player-name",
                                           symbolClassName = "player-symbol",
                                           playerClassName = "player",
                                           isActive
                                       }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, isEditingState] = useState(false);

    function handleEditClick() {
        isEditingState((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    const playerNameContent = !isEditing ? (<span className={nameClassName}>{playerName}</span>) :
        <input type="text" required value={playerName} onChange={handleChange}></input>;

    const buttonCaption = !isEditing ? "Edit" : "Save";

    return (
        <li className={isActive ? "active" : undefined}>
            <span className={playerClassName}>
                {playerNameContent}
                <span className={symbolClassName}>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    );
}
