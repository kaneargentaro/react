// Import image
import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js'

const reactDescriptor = ['Fundamental', 'Core', 'Crucial'];

function genRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
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
function CoreConcept(props: { image: string, title: string, description: string }) {
    return (
        <li>
            <img src={props.image} alt="..."/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}


// function CoreConcept1(title, description, image) {
//     return (
//         <li>
//             <img src={image} alt="..."/>
//             <h3>{title}</h3>
//             <p>{description}</p>
//         </li>
//     )
// }

function App() {

    return (
        <div>
            {/*{Header()}*/}
            {/*<Header></Header>*/}
            <Header/>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map((concept: any) => (
                        <CoreConcept
                            // title={concept.title}
                            // description={concept.description}
                            // image={concept.image}
                            {...concept}
                        />
                    ))}
                    {/*{CoreConcept({*/}
                    {/*    title: "Components",*/}
                    {/*    description: "The core UI building block",*/}
                    {/*    image: componentsImg*/}
                    {/*})}*/}
                    {/*{CoreConcept1(*/}
                    {/*    "Components",*/}
                    {/*    "The core UI building block",*/}
                    {/*    componentsImg*/}
                    {/*)}*/}
                </ul>
            </section>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App
