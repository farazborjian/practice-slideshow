import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import Button from './components/Button';
import './App.css';
import axios from 'axios';

function App() {

  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
      const callApi = async () => {
        try {
          const response = await axios.get('https://picsum.photos/v2/list')
          console.log(response);
          const randomImage = response.data.map(image => image.download_url)
          setImages(randomImage)
        } catch (error) {console.error(error)}
      }
      callApi()
  },[])

  const handlePrevious = () => {
    if(index === 0) {
      setIndex(images.length - 1)
    } else {
    setIndex(index - 1)
    }
  }

  const handleNext = () => {
    if(index === images.length -1) {
      setIndex(0)
    } else {
    setIndex(index + 1)
    }
  }
  return (
    <>
    <Container image={images[index]}/>
    <Button onClick1={handlePrevious} onClick2={handleNext} />
    </>
  );
}

export default App;
