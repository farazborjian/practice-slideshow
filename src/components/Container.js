import React from 'react';

const Container = ({image}) => {
    return (
        <div>
            <img className="img" src={image} alt="slider pic" />
        </div>
    )
}

export default Container
