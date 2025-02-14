import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescriptor = ['Fundamental', 'Core', 'Crucial'];

function genRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    // Dynamic values
    const description = reactDescriptor[genRandomInt(reactDescriptor.length - 1)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}
