export default function Header({image, title}) {
    return (
        <header>
            <img src={image}/>
            <h1>{title}</h1>
        </header>
    );
}
