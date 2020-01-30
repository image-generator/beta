import React, { useState, useEffect } from 'react';
import api from './services/api';
import Canvas from './Components/Canvas';
import './App.css';
import Categories from './Components/Categories';
import imagePortrait from './images/portrait.svg';
import imageLandScape from './images/landscape.svg';
import ModalBackground from './Components/ModalBackground';

function App() {

  const [format, setFormat] = useState(false);
  const [modalBackground, setModalBackground] = useState(false);
  const [modalCategories, setCategories] = useState(false);
  const [backgrounds, setBackgrounds] = useState('');
  const [type, setType] = useState('');
  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    localStorage.setItem('background', '')
  }, [])

  const portrait = {
    width: '600px',
    height: '600px',
    background: localStorage.getItem('background'),
  };

  const landscape = {
    width: '337px',
    height: '600px',
    background: localStorage.getItem('background'),
  };
  

  const pixabayKey = '8387701-5e4e7d3a7ec1162dbcc87ac47';

  async function handleImageBackground(data) {
    console.log(data);
    console.log('backgrounds', backgrounds)
    if (backgrounds === '') {
      const response = await api.get(`?key=${pixabayKey}&q=${data.selectedOption.value}&orientation=${orientation}&image_type=photo&pretty=true`);
      setBackgrounds(response.data.hits);
      setModalBackground(true);
      console.log(response.data);
    }

  };


  const handleType = (typeImage) => {
    typeImage === 'horizontal' ? setType('horizontal') : setType('vertical');
    setOrientation(typeImage);
    setFormat(true);
    setCategories(true);
  }

  function handlClick() {
    setModalBackground(false)
    setCategories(false);
    console.log()
  };

  const reset = () => {
    setFormat(false);
  };

  return (
    <div className="App">

      {modalBackground && (
        <ModalBackground onClick={handlClick} backgrounds={backgrounds} />
      )}

      <button onClick={reset} className="reset">
        Nova Imagem
      </button>

      <div className="canvasWrapper">
        {!format && (
          <>
            <span>Qual tipo de imagem quer criar?</span>
            <div className="formatButtons">
              <button onClick={() => handleType('horizontal')}>
                <img src={imagePortrait} alt="Imagem para Feed"/>
                Imagem para Feed
              </button>
              <button onClick={() => handleType('vertical')}>
                <img src={imageLandScape} alt="Imagem para Stories"/>
                Imagem para Stories
              </button>
            </div>
          </>
        )}

        {format && (
          <div className={`${'canvas'} ${type === 'horizontal' ? 'portrait' : 'landscape'}`} style={{ background: `url('${localStorage.getItem('background')}')` }}>

            {modalCategories && (
              <Categories onSubmit={handleImageBackground} />
            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default App;
