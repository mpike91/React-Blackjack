import './Card.css';

const Card = ({ card }) => {
    // Set img according to card[0] value and card[1] suit.
    const img = `https://deckofcardsapi.com/static/img/${card[0] + card[1]}.png`
    return (
        <div className="Card">
            <img src={img}></img>
        </div>
    )
}

export default Card;