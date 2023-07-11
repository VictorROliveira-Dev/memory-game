import './style.css';

function CardGame(icon = "brain-img", alt = "brain image") {
    return /*html*/`
        <article class="card-game">
            <img class="card-game-img" src="images/${icon}.png" alt="${alt}">
        </article>
    `;
}

export default CardGame;