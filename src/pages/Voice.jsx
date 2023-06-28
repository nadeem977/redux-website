import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Voice = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const populateVoices = () => {
      const speechSynthesis = window.speechSynthesis;
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0]);
    };

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }

    populateVoices();
  }, []);

  const handleListen = () => {
    const text = document.querySelector("#text").value;
    const maxChunkLength = 100;
    const chunks = [];
    let i = 0;

    while (i < text.length) {
      chunks.push(text.substr(i, maxChunkLength));
      i += maxChunkLength;
    }

    const playChunks = () => {
      if (chunks.length === 0) return;

      const chunk = chunks.shift();
      const speech = new SpeechSynthesisUtterance(chunk);
      speech.voice = selectedVoice;
      speech.onend = playChunks;

      window.speechSynthesis.speak(speech);
    };

    playChunks();
  };

  const handleVoiceChange = (event) => {
    const voiceIndex = event.target.value;
    const selectedVoice = voices[voiceIndex];
    setSelectedVoice(selectedVoice);
  };

  return (
    <Box className='voice--back'>
      <h1>Text To Speech Converter</h1>
      <textarea id="text" placeholder='Write anything here...'></textarea>

      <Box className='voice-selct' style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '1rem' }}>
        <select id="selct" onChange={handleVoiceChange}>
          {voices.map((voice, index) => (
            <option key={index} value={index}>
              {voice.name}
            </option>
          ))}
        </select>

        <Button variant="contained" color='secondary' onClick={handleListen}><PlayArrowIcon /> Listen</Button>
      </Box>
    </Box>
  );
};

export default Voice;
