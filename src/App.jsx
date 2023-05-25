import { Logo } from './components/Logo'
import { GameBoard } from './components/GameBoard'
import { Rules } from './components/Modal/Rules'

function App () {
  return (
    <main className='h-screen flex flex-col justify-center items-center gap-10'>
      <div className='flex justify-between border border-white rounded-3xl h-32 p-4 w-[700px]'>
        <Logo />
        <div className='bg-white w-24 flex flex-col items-center rounded-xl p-3'>
          <p className='text-[#636362] font-bold uppercase'>Score</p>
          <span className='text-5xl text-[#142d4c] font-bold'>1</span>
        </div>
      </div>
      <GameBoard />
      <div>
        <Rules />
      </div>
    </main>
  )
}

export default App
