import React from 'react'

export const Card = ({ cardData }) => {
  return (
    <div className="m-8 w-96 rounded overflow-hidden shadow-lg">
      <img className="w-full" src={cardData?.download_url} alt={cardData?.id} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{cardData?.author}</div>
        <p className="text-gray-700 text-base">
          {`image ${cardData?.id}`}
        </p>
      </div>
    </div>
  )
}

export default Card