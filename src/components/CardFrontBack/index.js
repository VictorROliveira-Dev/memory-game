import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("panda-dance-removebg", "panda dançando")}
        </article>
    `
}

export default CardFrontBack;