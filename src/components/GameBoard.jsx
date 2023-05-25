import { Buttons } from './Buttons'
import { Triangle } from './Triangle'

export function GameBoard () {
  return (
    <div className='w-[700px] h-[400px] relative flex justify-center items-center'>
      <div>
        <Triangle />
      </div>
      <Buttons />
    </div>
  )
}
