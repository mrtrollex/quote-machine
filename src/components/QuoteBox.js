/*IMPORTS*/
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteBox = ({ quotes }) => {
  const [myQuote, setMyQuote] = useState({});

  useEffect(() => {
    getMyQuote();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  {
    /*Getting and randomizing my quote*/
  }
  function getMyQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const myQuote = quotes[randomNumber];
    setMyQuote((prevMyQuote) => {
      return {
        ...prevMyQuote,
        text: myQuote.text,
        author: myQuote.author,
      };
    });
  }

  return (
    <React.Fragment>
      <div className="quote-box">
        <div className="quote-text" id="text">
          <FontAwesomeIcon icon={faQuoteLeft} className="quote-mark" />
          {myQuote.text}
        </div>
        <div className="author" id="author">
          {myQuote.author}
        </div>
        <div className="tweet-container">
          <a /*Tweeter icon for retweeting quote*/
            className="button tweet"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${myQuote.text}"  — ${myQuote.author}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="newQuote">
        {' '}
        {/*My rocket icon that i use as button*/}
        <a id="new-quote" href="/#" onClick={() => getMyQuote()}>
          <FontAwesomeIcon icon={faRocket} className="rocket" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default QuoteBox;
