import React, { useState } from 'react';
import SentimentForm from './components/SentimentForm';
import SentimentResult from './components/SentimentResult';
import { analyzeSentiment } from './api/api';

const App = () => {
  const [result, setResult] = useState(null);

  const handleAnalyze = async (sentence) => {
    try {
      const response = await analyzeSentiment(sentence);
      setResult(response);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  return (
    <div >
      <h1>Sentiment Analysis</h1>
      <div >
        <SentimentForm onAnalyze={handleAnalyze} />
        {result && (
          <SentimentResult emotion={result.label} confidence={result.score} />
        )}
      </div>
    </div>
  );
};

export default App;
