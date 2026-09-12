import './Card.css'; 
function Card({icon, title, desc, level}){
    return(
        <article className="card">
            <p className="card__icon">{icon}</p>
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{desc}</p>
            <span className="card__level">{level}</span>
        </article>
    )
}
export default Card;