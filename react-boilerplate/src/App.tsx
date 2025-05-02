import './App.css'
import AudioPlayer from './components/AudioPlayer'
import LyricsInput from './components/LyricsInput'
import LyricsResult from './components/LyricsResult'
import { useLyricsGame } from './hooks/useLyricsGame'

function App() {
  const {
    lyrics,
    values,
    submitted,
    score,
    lengthWithoutSpace,
    handleValueChange,
    handleSubmit,
    handleReset,
  } = useLyricsGame();

  return (
    <>
      <AudioPlayer />
      {!submitted ? (
        <LyricsInput
          lyrics={lyrics}
          values={values}
          onValueChange={handleValueChange}
          onSubmit={handleSubmit}
        />
      ) : (
        <LyricsResult
          lyrics={lyrics}
          values={values}
          score={score}
          totalLength={lengthWithoutSpace}
          onReset={handleReset}
        />
      )}
    </>
  )
}

export default App
