import { useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import LyricsInput from "./components/LyricsInput";
import SubmitButton from "./components/SubmitButton";

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
