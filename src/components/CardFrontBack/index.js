import CardGame from "../CardGame";
import './style.css';

function CardFrontBack() {
    /*Criando uma função para click, que funcione apenas com o CardFrontBack: */
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');

        /*if (!$cardFrontBack.classList.contains('-active')) {
            $cardFrontBack.classList.add('-active');
        }
        else {
            $cardFrontBack.classList.remove('-active');
        }*/

        /*Verificando com Toggle: */
        $cardFrontBack.classList.toggle('-active');
    }

    return /*html*/`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
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