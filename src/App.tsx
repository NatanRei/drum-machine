import React, { useState } from 'react';
import './App.css'

interface DrumPodProps {
  text: string;
  audio: string;
  handleUpdateDisplay( id:string ): void;
}

function DrumPodFunc({ text, audio, handleUpdateDisplay }: DrumPodProps) {

  const playSound = async (e: any) => {
    const drum = e.target
    handleUpdateDisplay(drum.children[0].id)
    drum.classList.add("active")
    await drum.children[0].play()
    drum.classList.remove("active")
  };

  return (
    <div className="drum-pad" onClick={playSound} id={`drum-${text}`}>
        {text}
        <audio src={audio} className="clip" id={text}/>
    </div>
  );
}

const sounds = [
  {
    key: "Q",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    key: "W",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    key: "E",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    key: "A",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    key: "S",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    key: "D",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    key: "Z",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "X",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    key: "C",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

export function App() {
  const [ display, setDisplay] = useState('Vamos se Divertir!');

  const handleUpdateDisplay = (id: string) => {
    setDisplay(`${id} foi tocada!`)
  }

  return (
    <div className="container-fluid">
    <div id="display" className="display">
    <h1>{display}</h1>
    {sounds.map((sound, index) => (
      <DrumPodFunc text={sound.key} key={index} audio={sound.mp3} handleUpdateDisplay={handleUpdateDisplay} />
    ))}
  </div>
  </div>
  )
}
