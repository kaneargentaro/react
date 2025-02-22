// @ts-ignore
import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import CoreConcept from "./components/CoreConcept/CoreConcept.tsx";
import Header from "./components/Header/Header.tsx";
import TabButton from './components/TabButton/TabButton.tsx';

function App() {
    // Hook function
    // Exactly 2 elements

    function handleSelect(selectedButton: string) {
        if (EXAMPLES[selectedButton]) {
            setSelectedTopic(selectedButton)
        }
    }

    let tabContent = <p>Please select a topic</p>;

    if (selectedTopic) {
        tabContent = (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            )
        </div>);
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
                    <TabButton
                        isSelected={selectedTopic === 'components'}
                        onSelect={() => handleSelect('components')}>Components
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'jsx'}
                        onSelect={() => handleSelect('jsx')}>JSX
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'props'}
                        onSelect={() => handleSelect('props')}>Props
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'state'}
                        onSelect={() => handleSelect('state')}>State
                    </TabButton>
                </menu>
                {tabContent}
            </section>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App
