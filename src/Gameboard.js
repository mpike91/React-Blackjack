import './Gameboard.css'
import Card from './Card';

const Gameboard = () => {
    // Setup array of card values, array of suits, and an object of card value "scores"
    const vals = [2, 3, 4, 5, 6, 7, 8, 9, 0, "J", "Q", "K", "A"];
    const suits = ["H", "C", "D", "S"];
    const valScores = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 10, "J": 10, "Q": 10, "K": 10, "A": 11 }

    // Setup card1 and card2 with null values. Then run a "while" loop setting a random val to [0] for each card and a random suit to [1] for each card. If they are the same card, the loop will run again, until the cards are distinct.
    const card1 = [null, null];
    const card2 = [null, null];
    while (card1[0] === card2[0] && card1[1] === card2[1]) {
        card1[0] = vals[Math.floor(Math.random() * vals.length)]
        card2[0] = vals[Math.floor(Math.random() * vals.length)]
        card1[1] = suits[Math.floor(Math.random() * suits.length)];
        card2[1] = suits[Math.floor(Math.random() * suits.length)];
    }

    // Using valScores object, find the score of the two cards. Then initialize blackjack to be "BLACKJACK!!!" if score is 21, otherwise undefined.
    const score = valScores[card1[0]] + valScores[card2[0]];
    const blackjack = score === 21 ? "BLACKJACK!!!" : undefined;

    // Return two Cards, passing the card arrays as the "card" prop. Display score below cards.
    return (
        <div className="Gameboard">
            <Card card={card1} />
            <Card card={card2} />
            <h1 className='Gameboard-score'>Score: {score}<br /><br />{blackjack}</h1>
        </div>
    );
};

export default Gameboard;