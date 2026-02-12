import React from 'react';
import './about.css';

const cannedQuotes = [
  {
    quote: 'talk is cheap.',
    author: 'test',
  },
  {
    quote: 'test2',
    author: 'test2',
  },
];


export function About() {
  const [currentQuote, setCurrentQuote] = React.useState(cannedQuotes[0])

  React.useEffect(() => {
    const newQuote = cannedQuotes[Math.floor(Math.random() * cannedQuotes.length)];
    setCurrentQuote(newQuote)
  })

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <div id="picture" className="picture-box"><img src="placeholder.jpg" alt="random" /></div>

        <p>
          Simon is a repetitive memory game where you follow the demonstrated color sequence until you make a mistake.
          The longer the sequence you repeat, the greater your score.
        </p>

        <p>
          The name Simon is a registered trademark of Milton-Bradley. Our use of the name and the game is for non-profit
          educational use only. No part of this code or program should be used outside of that definition.
        </p>

        <div id="quote" className="quote-box bg-light text-dark">
          <p className="quote">{currentQuote.quote}</p>
          <p className="author">Linus Torvalds</p>
        </div>
      </div>
    </main>
  );
}