import Quote from "../interfaces/quote";

interface CardProps {
  quote: Quote;
}

const Card = ({ quote }: CardProps) => {
  return (
    <div className="card">
      <p>{quote.quoteText}</p>
      <p className="attribution">
        {" "}
        - {quote.author && `${quote.author}`}
        {quote.source && `, ${quote.source}`}
      </p>
    </div>
  );
};

export default Card;
