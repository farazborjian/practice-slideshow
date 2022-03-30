import React from 'react'
import Card from './Card'

const ImageContainer = ({ data: images }) => {
  return (
    <div className="flex flex-wrap mx-auto">
      {images?.map(image => {
        return (
          <Card key={image.id} cardData={image} />
        )
      })}
    </div>

  )
}

export default ImageContainer