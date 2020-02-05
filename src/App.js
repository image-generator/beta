import React, { useState, useEffect } from 'react';
import api from './services/api';
import { Button } from '@material-ui/core';
import shortid from 'shortid';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import SelectOrientation from './Components/SelectOrientation';
import SelectCategories from './Components/SelectCategories';
import SelectBackground from './Components/SelectBackground';
import TextContainer from './Components/TextSetup/TextContainer'
import FilterSetup from './Components/FilterColor/FilterSetup';
import FilterOverlay from './Components/FilterColor/FilterOverlay';
import DragAndDropText from './Components/TextSetup/DragAndDropText';
import { categoriesToQuery } from './utils/categoriesToQuery';

import { pixabayKey } from './config';

import './App.css';
import 'rc-color-picker/assets/index.css';

function App() {

  const [showSelectOrientation, setShowSelectOrientation] = useState(true);
  const [showModalCategories, setShowModalCategories] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [showModalBackground, setShowModalBackground] = useState(false);

  const [backgrounds, setBackgrounds] = useState('');
  const [orientation, setOrientation] = useState('');

  // Painel
  const [panel, setPanel] = useState({
    filter: true,
    text: false,
  });
  const [texts, setTexts] = useState([])
  const [filterColor, setFilterColor] = useState('#FFF');
  const [filterOpacity, setFilterOpacity] = useState(0.2);

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
    setFilterColor(color.color);
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
      color: 'red',
      background: '',
      fontSize: 16,
    }
    setTexts([ ...texts, newText ]);

    if (!panel.text) {
      setPanel({ ...panel, text: true })
    }
  };

  const handleColorOk = (color) => {
    return color.color;
  }

  return (
    <div className="App">

      <button onClick={reset} className="reset">
        Nova Imagem
      </button>

      {showModalBackground && (
        <SelectBackground onClick={handleCloseBackgrounds} backgrounds={backgrounds} />
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
                <FilterSetup
                  checked={panel.filter}
                  color={filterColor}
                  opacity={filterOpacity}
                  onColorChange={handleFilterColor}
                  onSwitchChange={handlePanel}
                  onOpacityChange={handleChangeFilterValue}
                />
              </div>

              <div className="aside-item item-middle">
                <span className="aside-title">Texto</span>
                {texts.map((input, index) => (
                    <TextContainer
                      key={input.id}
                      index={index}
                      text={input.title}
                      texts={texts}
                      setTexts={setTexts}
                    />
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
                  <FilterOverlay
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
