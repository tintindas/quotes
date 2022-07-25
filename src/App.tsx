import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Quote from "./interfaces/quote";

function App() {
  const [quote, setQuote] = useState<Quote>({
    _id: "60085b1967e5ab5838f652af",
    tags: [],
    quoteText:
      "The creation of wealth is certainly not to be despised, but in the long run the only human activities really worthwhile are the search for knowledge, and the creation of beauty. This is beyond argument, the only point of debate is which comes first.",
    author: "Arthur C. Clarke",
    source:
      "Profiles of the Future: An Inquiry into the Limits of the Possible",
  });

  const [stack, setStack] = useState<Quote[]>([]);

  const handleNextClick = () => {
    setStack([...stack, quote]);

    fetch("https://tintin-quotes-api.herokuapp.com/quotes/random")
      .then((res) => res.json())
      .then((res) => {
        setQuote(res.quotes[0]);
      });
  };

  const handlePrevClick = () => {
    const quote = stack.pop();
    setStack(stack.slice(0, -1));
    if (quote) {
      setQuote(quote);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <button onClick={handlePrevClick}>
          <img src="/arrow-left.svg" alt="Left arrow. Go to previous quote." />
        </button>
        <Card quote={quote} />
        <button onClick={handleNextClick}>
          <img src="/arrow-right.svg" alt="Right arrow. Go to next quote." />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
