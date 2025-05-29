import { useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer.answer";
import LyricsInput from "./components/LyricsInput.answer";
import SubmitButton from "./components/SubmitButton.answer";

function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <AudioPlayer />
      <LyricsInput submitted={submitted} />
      <SubmitButton submitted={submitted} setSubmitted={setSubmitted} />
    </>
  );
}

export default App;
