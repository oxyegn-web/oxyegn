// "use client"
// import React, { useState } from 'react';
// // @ts-ignore
// import { useSpeechSynthesis } from 'react-speech-kit';
  

// const TextToSpeechPage: React.FC = () => {
//   const [text, setText] = useState('');
//   const [spokenText, setSpokenText] = useState('');
//   const { speak } = useSpeechSynthesis();

//   const handleSpeak = () => {
//     speak({ text });
//   };

// //   const handleListen = () => {
// //     let recognition: SpeechRecognition | undefined;
  
// //     if ('webkitSpeechRecognition' in window) {
// //       // For Chrome and Opera
// //       console.log("1")
// //       recognition = new window.webkitSpeechRecognition();

// //       console.log("2", recognition)
// //     } else if ('SpeechRecognition' in window) {
// //       // For Firefox
// //       recognition = new window.SpeechRecognition();
// //     } else {
// //       // Handle unsupported browsers
// //       console.log('Speech recognition not supported');
// //       console.log("3")
// //       return;
// //     }
  
// //     recognition.lang = 'en-US';
  
// //     recognition.onresult = (event: any) => {
// //       const spokenResult = event.results[0][0].transcript;
// //       console.log("7spokenResult", spokenResult)
// //       setSpokenText(spokenResult);
// //     };
  
// //     recognition.start();
// //   };

// const handleListen = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.continuous = true;

//     recognition.onstart = () => {
//       console.log('Speech recognition started');
//     };

//     recognition.onresult = (event: any) => {
//       const spokenResult = event.results[0][0].transcript;
//       console.log('Spoken result:', spokenResult);
//       setSpokenText(spokenResult);
//     };

//     recognition.onerror = (event: any) => {
//       console.error('Speech recognition error:', event.error);
//     };

//     recognition.onend = () => {
//       console.log('Speech recognition ended');
//     };

//     recognition.start();
//   };

  
  
  

//   return (
//     <div>
//       <h2>Text to Speech</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text..."
//       />
//       <button onClick={handleSpeak}>Speak</button>

//       <h2>Speech to Text</h2>
//       <input
//         type="text"
//         value={spokenText}
//         onChange={(e) => setSpokenText(e.target.value)}
//         placeholder="Spoken text will appear here..."
//       />
//       <button onClick={handleListen}>Listen</button>
//     </div>
//   );
// };

// export default TextToSpeechPage;


"use client"
"use client"
import React, { useState } from 'react';
// @ts-ignore
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeechPage: React.FC = () => {
  const [text, setText] = useState('');
  const [spokenText, setSpokenText] = useState('');
  const { speak } = useSpeechSynthesis();

  const handleSpeak = () => {
    speak({ text });
  };

  const handleListen = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;

    recognition.onstart = () => {
      console.log('Speech recognition started');
    };

    recognition.onresult = (event: any) => {
      const spokenResult = event.results[0][0].transcript;
      console.log('Spoken result:', spokenResult);
      setSpokenText(spokenResult);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended');
    };

    recognition.start();
  };

  return (
    <div>
      <h2>Text to Speech</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
      />
      <button onClick={handleSpeak}>Speak</button>

      <h2>Speech to Text</h2>
      <input
        type="text"
        value={spokenText}
        onChange={(e) => setSpokenText(e.target.value)}
        placeholder="Spoken text will appear here..."
      />
      <button onClick={handleListen}>Listen</button>
    </div>
  );
};

export default TextToSpeechPage;
