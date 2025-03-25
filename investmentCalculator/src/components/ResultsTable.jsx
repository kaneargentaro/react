import {calculateInvestmentResults, formatter} from "../util/investment.js";

const TABLE_HEADERS = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital"
]

export default function ResultsTable({userInput}) {

    function derivedInvestmentResults(userInput) {
        const investmentResults = calculateInvestmentResults(userInput)

        let totalInterest = 0;
        let totalInvestedCapital = userInput.initialInvestment;

        return investmentResults.map((result) => {
            totalInterest += result.interest;
            totalInvestedCapital += result.annualInvestment;
            return {
                year: result.year,
                interest: formatter.format(result.interest),
                valueEndOfYear: formatter.format(result.valueEndOfYear),
                totalInterest: formatter.format(totalInterest),
                totalInvestedCapital: formatter.format(totalInvestedCapital),
            }
        });
    }

    const data = derivedInvestmentResults(userInput);

    return (
        <table id="result">
            <thead>
            <tr>
                {
                    TABLE_HEADERS.map((header) =>
                        <th>{header}</th>
                    )
                }
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.year}>
                    <td>
                        {row.year}
                    </td>
                    <td>
                        {row.valueEndOfYear}
                    </td>
                    <td>
                        {row.interest}
                    </td>
                    <td>
                        {row.totalInterest}
                    </td>
                    <td>
                        {row.totalInvestedCapital}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}