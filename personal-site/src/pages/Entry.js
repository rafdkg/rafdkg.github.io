export default function Entry(props) {
    return (
        <a href={props.link} target="_blank">
            <div className="Entry">
                <p>{props.title}</p>
                <p>{props.description}</p>
            </div>
        </a>
    )
}