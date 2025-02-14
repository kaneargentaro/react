import {useState} from 'react';

// @ts-ignore
import {CORE_CONCEPTS} from "./data.js";
import CoreConcept from "./components/CoreConcept/CoreConcept.tsx";
import Header from "./components/Header/Header.tsx";
import TabButton from './components/TabButton/TabButton.tsx';

function App() {
    // Hook function
    // Exactly 2 elements
    const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

    function handleSelect(selectedButton: string) {
        if (selectedButton === 'components') {
            setSelectedTopic(`We are running Components`);
        } else if (selectedButton === 'jsx') {
            setSelectedTopic(`We are running JSX`);
        } else if (selectedButton === 'props') {
            setSelectedTopic(`We are running Props`);
        } else if (selectedButton === 'state') {
            setSelectedTopic(`We are running State`);
        }
    }

    return (
        <div>
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
                </ul>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                    <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                    <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                </menu>
                <p>{selectedTopic}</p>
            </section>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App
