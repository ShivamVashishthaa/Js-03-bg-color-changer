import React, { useState } from 'react'

function BackgroundChanger() {
  const [color, setColor] = useState("white")
  return (
    <div style={{ backgroundColor: color }} className='w-full h-screen '>
      <div className='fixed flex justify-center bottom-12 inset-x-0 gap-3 p-3 bg-gray-500 rounded-3xl mx-5'>
        <button className='bg-blue-700 rounded-3xl px-5' onClick={() => setColor("blue")}>Blue</button>
        <button className='bg-black rounded-3xl px-5 text-white' onClick={() => setColor("black")}>Black</button>
        <button className='bg-white rounded-3xl px-5' onClick={() => setColor("white")}>White</button>
        <button className='bg-red-700 rounded-3xl px-5' onClick={() => setColor("red")}>Red</button>
        <button className='bg-purple-700 rounded-3xl px-5' onClick={() => setColor("purple")}>Purple</button>
        <button className='bg-red-900 rounded-3xl px-5' onClick={() => setColor("brown")}>Brown </button>
        <button className='bg-yellow-600 rounded-3xl px-5' onClick={() => setColor("yellow")}>Yellow</button>
        <button className='bg-pink-400 rounded-3xl px-5' onClick={() => setColor("pink")}>Pink</button>
      </div>
    </div>
  )
}

export default BackgroundChanger
