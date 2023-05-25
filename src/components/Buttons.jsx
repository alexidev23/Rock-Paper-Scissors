import { Paper } from './Paper'
import { Scissors } from './Scissors'
import { Rock } from './Rock'

export function Buttons () {
  const Botones = [
    {
      id: 1,
      component: <Paper />,
      color: '005792',
      top: '0',
      left: '123',
      bottom: 'auto',
      right: 'auto'
    },
    {
      id: 2,
      component: <Scissors />,
      color: 'eec60a',
      top: 0,
      right: '132',
      bottom: 'auto',
      left: 'auto'
    },
    {
      id: 3,
      component: <Rock />,
      color: 'dc2f2f',
      bottom: '6',
      left: '266',
      top: 'auto',
      right: 'auto'
    }
  ]

  return (
    <div>
      {
        Botones.map(boton => (
          <div
            style={{ left: boton.left + 'px', top: boton.top + 'px', bottom: boton.bottom + 'px', right: boton.right + 'px', background: '#' + boton.color }}
            key={boton.id} className='rounded-full h-40 w-40 flex justify-center items-center absolute bottom-[6px] cursor-pointer transition-all
            hover:hover:scale-110
            active:animate-jump-in
            active:animate-duration-200
            active:animate-ease-out'
          >
            <div className='bg-white rounded-full h-[120px] w-[120px] flex justify-center items-center shadow-inner shadow-gray-600'>
              {boton.component}
            </div>
          </div>
        )
        )
    }
    </div>
  )
}
