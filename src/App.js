import React, { useState, useEffect } from 'react';
import api from './services/api';
import SelectCategories from './Components/SelectCategories';
import SelectOrientation from './Components/SelectOrientation';

import ModalBackground from './Components/ModalBackground';
import { Switch, Slider, Button } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import OverlayFilter from './Components/OverlayFilter';
import DragAndDropText from './Components/DragAndDropText';
import shortid from 'shortid';
import { pixabayKey } from './config';
import { categoriesToQuery } from './utils/categoriesToQuery';

import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import Input from './Components/General/Input';

import './App.css';

function App() {

  const [showSelectOrientation, setShowSelectOrientation] = useState(true);
  const [showModalCategories, setShowModalCategories] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [showModalBackground, setShowModalBackground] = useState(false);
  const [backgrounds, setBackgrounds] = useState('');
  const [orientation, setOrientation] = useState('');

  const [texts, setTexts] = useState([])

  // Painel
  const [panel, setPanel] = useState({
    filter: true,
    text: false,
  });

  const [filterColor, setFilterColor] = useState('#FFF');
  const [filterOpacity, setFilterOpacity] = useState(0.2);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);


  useEffect(() => {
    localStorage.setItem('background', '')
  }, [])
  

  async function handleImageBackground(data) {
    if (backgrounds === '') {
      const response = await api.get(`?key=${pixabayKey}&q=${categoriesToQuery(data.selectedOption)}&orientation=${orientation}&image_type=photo&pretty=true`);
      setBackgrounds(response.data.hits);
      setShowModalBackground(true);
      setShowPanel(true);
    }
  };

  const handleOrientation = (orientation) => {
    setOrientation(orientation);
    setShowSelectOrientation(false);
    setShowModalCategories(true);
  }

  const handleCloseBackgrounds = () => {
    setShowModalBackground(false)
    setShowModalCategories(false);
  };

  const reset = () => {
    setShowSelectOrientation(true);
  };

  const handlePanel = name => event => {
    setPanel({ ...panel, [name]: event.target.checked });
  };

  const handleFilterColor = (color) => {
    setFilterColor(color.hex);
  };

  const handleOpenColorPicker = () => {
    if (panel.filter) {
      setDisplayColorPicker(!displayColorPicker);
    }
  };

  const handleCloseColorPicker = () => {
    setDisplayColorPicker(false);
  };

  const handleChangeFilterValue = (event, newValue) => {
    setFilterOpacity(newValue);
  };

  const handleAddText = () => {
    const newText = {
      id: shortid.generate(),
      top: 180,
      left: 200,
      title: 'Novo texto...',
      color: '',
      background: ''
    }
    setTexts([ ...texts, newText ]);

    if (!panel.text) {
      setPanel({ ...panel, text: true })
    }
  };

  const handleChangeText = (event, index) => {
    const newText = texts;
    newText[index].title = event.target.value;
    setTexts([ ...newText ]);
  };

  const handleColorText = (index, color) => {
    const newText = texts;
    newText[index].color = color;
    setTexts([ ...newText ]);
  };

  return (
    <div className="App">

      <button onClick={reset} className="reset">
        Nova Imagem
      </button>

      {showModalBackground && (
        <ModalBackground onClick={handleCloseBackgrounds} backgrounds={backgrounds} />
      )}

      <div className="canvasWrapper">

        {showSelectOrientation && (
          <SelectOrientation onSelect={handleOrientation} />
        )}

        {showModalCategories && (
          <SelectCategories onSubmit={handleImageBackground} />
        )}

        {showPanel && (
          <div className="panelWrapper">

            <aside className="aside">
              <div className="aside-item">
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
                      <div className="color" style={{ background: panel.filter ? filterColor : '#e0e0e0' }} />
                    </div>
                    {displayColorPicker ? (
                      <div className="popover">
                        <div className="cover" onClick={handleCloseColorPicker} />
                        <ChromePicker
                          color={filterColor}
                          onChangeComplete={handleFilterColor}
                        />
                      </div>
                    ) : null}
                  </div>
                  <Slider
                    disabled={!panel.filter}
                    value={filterOpacity}
                    min={0}
                    step={0.1}
                    max={1}
                    onChange={handleChangeFilterValue}
                    valueLabelDisplay="auto"
                    aria-labelledby="discrete-slider"
                  />
                </div>
              </div>
              <div className="aside-item item-middle">
                <span className="aside-title">Texto</span>

                {texts.map((input, index) => (
                  <div key={input.id}>
                    <Input
                      index={index}
                      value={input.title}
                      onChange={event => handleChangeText(event, index)}
                      onChangeColor={handleColorText}
                    />
                  </div>
                ))}

                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={handleAddText}
                >
                  Inserir texto
                </Button>
              
              </div>

            </aside>

            <div className="panel">
              <div
                className={`${'canvas'} ${orientation === 'horizontal' ? 'portrait' : 'landscape'}`}
                style={{ background: `url('${localStorage.getItem('background')}')`, backgroundSize: 'cover' }}
              >
                {panel.filter && (
                  <OverlayFilter
                    color={filterColor}
                    opacity={filterOpacity}
                  />
                )}

                {panel.text && (
                  <DndProvider backend={Backend}>
                    <DragAndDropText
                      texts={texts}
                      setTexts={setTexts}
                    />
                  </DndProvider>
                )}
              </div>
            </div>
            
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
