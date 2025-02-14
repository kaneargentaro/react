import './CoreConcept.css';

export default function CoreConcept(props: { image: string, title: string, description: string }) {
    return (
        <li>
            <img src={props.image} alt="..."/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}
