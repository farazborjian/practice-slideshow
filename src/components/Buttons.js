import React from 'react'

const Button = ({ previous, next }) => {
    return (
        <div className=" mx-8 w-6/12 flex justify-between px-6 pt-4 pb-2">
            <button onClick={previous} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Previous
            </button>
            <button onClick={next} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Next
            </button>
        </div>
    )
}

export default Button
