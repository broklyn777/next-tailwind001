/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-12">
      <div className="absolute  -z-10 h-[55vh] w-screen">
        <Image
          layout="fill"
          width="200px"
          height="200px"
          src={`/meditating-man.png`}
          alt="meditation"
        />
      </div>
      <h1 className="text-2xl font-bold  md:text-4xl lg:text-7xl">mr Dev</h1>
      <p className="text-shadow-md max-w-xs text-xs md:max-w-sm md:text-lg lg:max-w-2xl lg:text-2xl">
        Demo the fixed layout When fixed, the image dimensions will not change
        as the viewport changes (no responsiveness) similar to the native img
        element.
      </p>
    </div>
  )
}

export default Banner
