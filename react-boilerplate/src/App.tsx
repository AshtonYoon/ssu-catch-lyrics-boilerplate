import './App.css'
import AudioPlayer from './components/AudioPlayer'

function App() {
  return (
    <>
      <AudioPlayer />
      {Array.from("아슬히 고개 내민 내게 첫 봄인사를 건네줘요 피울 수 있게 도와줘요").map((x, i) => (
        <input
          key={i}
          className="letter"
          maxLength={1}
          value={x}
        />))}
      <div>
        <button className='btn-hover color-1'>제출하기</button>
      </div>
    </>
  )
}

export default App
