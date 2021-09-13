/*IMPORTS*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteBox from './components/QuoteBox';
import Loader from './components/Loader';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);


  /*Fetching quotes*/
  useEffect(() => {
    fetchQuotes();
  }, []);

  function fetchQuotes() {
    axios
      .get('https://type.fit/api/quotes')
      .then((response) => {
        setQuotes(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <div className="App"> 
    {/*Run loading spinner until fetching quotes is done*/}
      {loading ? ( 
        <Loader />
      ) : quotes.length !== 0 ? (
        <QuoteBox quotes={quotes} />
      ) : (
        <h1>404 Error</h1>
      )}
    </div>
  );
}

export default App;
