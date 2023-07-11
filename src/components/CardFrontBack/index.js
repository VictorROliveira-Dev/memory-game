import CardGame from "../CardGame";
import './style.css';

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("panda-dance-removebg", "panda dançando")}
            </div>
        </article>
    `
}

export default CardFrontBack;