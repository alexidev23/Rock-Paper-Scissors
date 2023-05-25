import React from 'react'
import Modal from 'react-modal'
import { ImgReglas } from './ImgReglas'
import { AiOutlineClose } from 'react-icons/ai'

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

export function Rules () {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal () {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal} className='text-white text-xl absolute cursor-pointerabsolute bottom-6 right-10 border rounded-lg w-28 text-center py-2'>Rules</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            padding: '20px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px'
          },
          overlay: {
            backgroundColor: 'none'
          }
        }}
        contentLabel='Example Modal'
      >
        <div className='flex justify-between mb-10'>
          <h2 className='text-2xl font-bold text-[#5e5e5e] uppercase'>Rules</h2>
          <button onClick={closeModal}>
            <AiOutlineClose className='text-2xl text-gray-400' />
          </button>
        </div>
        <ImgReglas />
      </Modal>
    </div>
  )
}
