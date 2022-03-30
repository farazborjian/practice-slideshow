import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import ImageContainer from './components/CardContainer';
import Button from './components/Buttons';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);

  const slice = {
    first: 0,
    last: 6
  }

  useEffect(() => {
    const callApi = async () => {
      try {
        const { data } = await axios.get('https://picsum.photos/v2/list')
        setImages(data)
      } catch (error) {
        console.error(error)
      }
    }
    callApi()
  }, [])

  console.log('images', images)


  const handlePrevious = () => {
    // handle previous click

  }

  const handleNext = () => {
    // handle Next click
  }


  return (
    <Container>
      <ImageContainer data={images.slice(slice.first, slice.last)} />
      <div className="w-full flex justify-center">
        <Button previous={handlePrevious} next={handleNext} />
      </div>

    </Container>
  );
}

export default App;
