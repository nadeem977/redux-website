import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import {ChestPiece} from '../components/svg.js'
const VoiceToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    let recognition = null;

    const startListening = () => {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error('Recognition error:', event.error);
      };

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join('');

        setRecognizedText(transcript);
      };

      recognition.start();
    };

    const stopListening = () => {
      if (recognition) {
        recognition.stop();
        recognition = null;
      }
    };

    if (isListening) {
      startListening();
    }

    return () => {
      stopListening();
    };
  }, [isListening]);

  const handleToggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className={`voice-text ${isListening ? 'listening' : ''}`}>
      <Button onClick={handleToggleListening}>{isListening ? <ChestPiece/> : 'Start Listening'}</Button>
      <br />
      <p>Recognized Text: {recognizedText} </p>
    </div>
  );
};

export default VoiceToText;
