import { useState } from 'react'
import { motion } from 'framer-motion'

const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e) => {
    if (!isDragging && e.type !== 'mousemove') return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  return (
    <div className="relative group">
      <div
        className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Full) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="After cleaning"
            className="w-full h-full object-cover"
            draggable="false"
          />
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
            After
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before cleaning"
            className="w-full h-full object-cover"
            draggable="false"
          />
          <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
            Before
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="flex gap-1">
              <div className="w-0.5 h-6 bg-gray-400"></div>
              <div className="w-0.5 h-6 bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>

      {title && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      )}
    </div>
  )
}

export default BeforeAfterSlider
