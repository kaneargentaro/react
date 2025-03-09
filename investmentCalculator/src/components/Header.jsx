export default function Header({title, image}) {
    return (
        <div id="header">
            <img src={image} alt=""></img>
            <h1 className="header">{title}</h1>
        </div>
    );
}