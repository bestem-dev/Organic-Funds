import Cards from "./Cards";
import "./Card.css";


function Card({img,title}){
    return(
    <div>
    <img className="img4" src= {img} alt={title} />
         <h1 className="title_Card">{title}</h1>
     </div>)
}
export default Card