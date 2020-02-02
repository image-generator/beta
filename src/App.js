import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
import Categories from './Components/Categories';
import imagePortrait from './images/portrait.svg';
import imageLandScape from './images/landscape.svg';
import ModalBackground from './Components/ModalBackground';
import { Switch, Slider } from '@material-ui/core';
import { SketchPicker } from 'react-color';

function App() {

  const [format, setFormat] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [modalBackground, setModalBackground] = useState(false);
  const [modalCategories, setCategories] = useState(false);
  const [backgrounds, setBackgrounds] = useState('');
  const [type, setType] = useState('');
  const [orientation, setOrientation] = useState('');

  // Painel
  const [panel, setPanel] = useState({
    filter: true,
  });
  const [filterColor, setFilterColor] = useState('');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [filterValue, setFilterValue] = useState(20);

  useEffect(() => {
    localStorage.setItem('background', '')
  }, [])
  
  const pixabayKey = '8387701-5e4e7d3a7ec1162dbcc87ac47';

  const handleCategoriesQuery = (categories) => {
    const handleArray = [];
    const query = categories.map(item => {
      handleArray.push(item.value);
      return handleArray;
    });
    const categoriesQuery = handleArray.join('+');
    return categoriesQuery;
  };

  async function handleImageBackground(data) {
    if (backgrounds === '') {
      const response = await api.get(`?key=${pixabayKey}&q=${handleCategoriesQuery(data.selectedOption)}&orientation=${orientation}&image_type=photo&pretty=true`);
      setBackgrounds(response.data.hits);
      setModalBackground(true);
      setShowPanel(true);
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
  };

  const reset = () => {
    setFormat(false);
  };

  const handlePanel = name => event => {
    setPanel({ ...panel, [name]: event.target.checked });
  };

  const handleFilterColor = (color) => {
    setFilterColor(color.hex);
  };

  const handleOpenColorPicker = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleCloseColorPicker = () => {
    console.log('handleCloseColorPicker')
    setDisplayColorPicker(false);
  };

  const handleChangeFilterValue = (event, newValue) => {
    setFilterValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className="App">

      <button onClick={reset} className="reset">
        Nova Imagem
      </button>

      {modalBackground && (
        <ModalBackground onClick={handlClick} backgrounds={backgrounds} />
      )}

      <div className="canvasWrapper">
        {!format && (
          <>
            <span className="canvas-title">Qual tipo de imagem quer criar?</span>
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

        {modalCategories && (
          <Categories onSubmit={handleImageBackground} />
        )}

        {(format && showPanel) && (
          <div className="panelWrapper">

            <aside className="aside">
              <div className="filtro">
                <span className="aside-title">Filtro</span>

                <div className="asideFilterWrapper">
                  <div className="switchColor">
                    <Switch
                      classes={{ root: "switch" }}
                      checked={panel.filter}
                      onChange={handlePanel('filter')}
                      value="filter"
                      color="primary"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <div className="swatch" onClick={handleOpenColorPicker}>
                      <div className="color" style={{ background: filterColor }} />
                    </div>
                    {displayColorPicker ? (
                      <div className="popover">
                        <div className="cover" onClick={handleCloseColorPicker} />
                        <SketchPicker
                          color={filterColor}
                          onChangeComplete={handleFilterColor}
                        />
                      </div>
                    ) : null}
                  </div>
                  <Slider
                    value={filterValue}
                    min={0}
                    step={1}
                    max={100}
                    getAriaValueText={valuetext}
                    onChange={handleChangeFilterValue}
                    valueLabelDisplay="auto"
                    aria-labelledby="discrete-slider"
                  />
                </div>
                  

              </div>
            </aside>

            <div className="panel">
              <div className={`${'canvas'} ${type === 'horizontal' ? 'portrait' : 'landscape'}`} style={{ background: `url('${localStorage.getItem('background')}')`, backgroundSize: 'cover' }}>
              
              </div>
            </div>
            
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
