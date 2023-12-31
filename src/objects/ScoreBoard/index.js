import ArrowDown from '../../components/ArrowDown';
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPlayer';
import './style.css';

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${ArrowDown()}
            ${PlayerName("Player 1")}
            ${PlayerScore()}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName("Player 2")}
        </header>
    `;
}

export default ScoreBoard;