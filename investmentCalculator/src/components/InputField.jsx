import {useState} from "react";

export default function InputField({id, initialValue, onChange, ...props}) {

    const [input, setInput] = useState(initialValue);

    function handleInputChange(event) {
        setInput(parseInt(event.target.value));
        onChange(id, parseInt(event.target.value));
    }

    return (
        <input
            id={id}
            type="number"
            value={input}
            onChange={handleInputChange}
            required
            {...props}
        />
    )
}