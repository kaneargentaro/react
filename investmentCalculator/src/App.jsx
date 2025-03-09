import Header from "./components/Header";
import UserInput from "./components/UserInput";
import investmentImage from './assets/investment-calculator-logo.png';
import {useState} from "react";
import ResultsTable from "./components/ResultsTable.jsx";

const INPUTS = {
    initialInvestment: 10000,
    expectedReturn: 5.5,
    annualInvestment: 300,
    duration: 12
}

export default function App() {

    const [userInput, setUserInput] = useState(INPUTS);

    const inputIsValid = userInput.duration > 0;

    function handleUserInputChange(inputIdentifier, newValue) {
        setUserInput((prev) => {
            return {
                ...prev,
                [inputIdentifier]: parseInt(newValue)
            };
        });
    }

    return (
        <>
            <Header
                title="Investment Calculator"
                image={investmentImage}
            />
            <UserInput
                inputs={userInput}
                onChange={handleUserInputChange}
            />
            {inputIsValid ?
                <ResultsTable
                    userInput={userInput}
                />
                : <p className="center">Please enter a duration greater than 0</p>}
        </>
    )
}
