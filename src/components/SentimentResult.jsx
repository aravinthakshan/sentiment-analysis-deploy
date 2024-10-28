import React from 'react';

const SentimentResult = ({ emotion, confidence }) => {
  return (
    <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-black-50">
      <h2 className="text-2xl font-semibold text-black">Result</h2>
      <p className="mt-2 text-lg text-black">
        <span className="font-bold text-black">Emotion:</span> {emotion}
      </p>
      <p className="text-lg text-black">
        <span className="font-bold text-black">Confidence:</span> {(confidence * 100).toFixed(2)}%
      </p>
    </div>
  );
};

export default SentimentResult;
