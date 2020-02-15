import React, { useState, useEffect } from 'react';
import { IconButton, Fab } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import shortid from 'shortid';
import Add from '@material-ui/icons/Add';

import api from '../../services/api';
import SelectOrientation from '../../components/SelectOrientation';
import SelectCategories from '../../components/SelectCategories';
import SelectBackground from '../../components/SelectBackground';
import { categoriesToQuery } from '../../utils/categoriesToQuery';
import downloadImage from '../../utils/downloadImage';

import FilterWrapper from '../../components/FilterSetup/FilterWrapper';
import FilterContainer from '../../components/FilterSetup/FilterContainer';
import TextContainer from '../../components/TextSetup/TextContainer';
import TextWrapper from '../../components/TextSetup/TextWrapper';
import Text from '../../components/TextSetup/Text';
import ShapeContainer from '../../components/ShapeSetup/ShapeContainer';
import ShapeWrapper from '../../components/ShapeSetup/ShapeWrapper';
import Shape from '../../components/ShapeSetup/Shape';

import { pixabayKey } from '../../config';

import './styles.css';
import 'rc-color-picker/assets/index.css';

function Home() {
  const [showSelectOrientation, setShowSelectOrientation] = useState(true);
  const [showModalCategories, setShowModalCategories] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [showModalBackground, setShowModalBackground] = useState(false);

  const [backgrounds, setBackgrounds] = useState('');
  const [orientation, setOrientation] = useState('');

  // Control Panel
  const [panel, setPanel] = useState({
    filter: false,
    text: false,
    shape: false,
  });
  const [filterColor, setFilterColor] = useState('#FFF');
  const [filterOpacity, setFilterOpacity] = useState(0.2);
  const [texts, setTexts] = useState([]);
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    localStorage.setItem('background', '');
  }, []);

  async function handleImageBackground(data) {
    if (backgrounds === '') {
      const response = await api.get(
        `?key=${pixabayKey}&q=${categoriesToQuery(
          data.selectedOption,
        )}&orientation=${orientation}&image_type=photo&pretty=true`,
      );
      setBackgrounds(response.data.hits);
      setShowModalBackground(true);
      setShowPanel(true);
    }
  }

  const handleOrientation = (orientation) => {
    setOrientation(orientation);
    setShowSelectOrientation(false);
    setShowModalCategories(true);
  };

  const handleCloseBackgrounds = () => {
    setShowModalBackground(false);
    setShowModalCategories(false);
  };

  const handleAddText = () => {
    const newText = {
      id: shortid.generate(),
      y: 180,
      x: 200,
      title: 'Novo texto...',
      color: '#000000',
      fontSize: 16,
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
    };

    setTexts([...texts, newText]);

    if (!panel.text) {
      setPanel({ ...panel, text: true });
    }
  };

  const handleAddShape = () => {
    const newShape = {
      id: shortid.generate(),
      background: '#FFF',
      opacity: 1,
      width: 120,
      height: 120,
      x: 180,
      y: 200,
      square: true,
      circle: false,
    };

    setShapes([...shapes, newShape]);

    if (!panel.shape) {
      setPanel({ ...panel, shape: true });
    }
  };

  return (
    <div className="App">
      {showModalBackground && (
        <SelectBackground
          onClick={handleCloseBackgrounds}
          backgrounds={backgrounds}
        />
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
                <FilterContainer
                  panel={panel}
                  setPanel={setPanel}
                  filterColor={filterColor}
                  setFilterColor={setFilterColor}
                  filterOpacity={filterOpacity}
                  setFilterOpacity={setFilterOpacity}
                />
              </div>

              <div className="aside-item item-middle">
                <span className="aside-title-text">
                  Textos
                  <IconButton
                    onClick={handleAddText}
                    color="primary"
                    aria-label="add text"
                    className="iconAddText"
                  >
                    <Add />
                  </IconButton>
                </span>
                {texts.map((input, index) => (
                  <TextContainer
                    key={input.id}
                    index={index}
                    text={input.title}
                    color={input.color}
                    background={input.background}
                    padding={input.padding}
                    texts={texts}
                    setTexts={setTexts}
                  />
                ))}
              </div>

              <div className="aside-item item-middle">
                <span className="aside-title-text">
                  Formas
                  <IconButton
                    onClick={handleAddShape}
                    color="primary"
                    aria-label="add shape"
                    className="iconAddText"
                  >
                    <Add />
                  </IconButton>
                </span>
                {shapes.map((shape, index) => (
                  <ShapeContainer
                    key={shape.id}
                    index={index}
                    shapes={shapes}
                    setShapes={setShapes}
                  />
                ))}
              </div>
            </aside>

            <div className="panel">
              <div
                id="download"
                className={`${'canvas'} ${
                  orientation === 'horizontal' ? 'portrait' : 'landscape'
                }`}
                style={{
                  background: `url('${localStorage.getItem('background')}')`,
                  backgroundSize: 'cover',
                }}
              >
                {panel.filter && (
                  <FilterWrapper color={filterColor} opacity={filterOpacity} />
                )}

                {panel.text && (
                  <TextWrapper>
                    <Text texts={texts} setTexts={setTexts} />
                  </TextWrapper>
                )}

                {panel.shape && (
                  <ShapeWrapper>
                    <Shape shapes={shapes} setShapes={setShapes} />
                  </ShapeWrapper>
                )}
              </div>
            </div>

            <Fab
              onClick={downloadImage}
              aria-label="Download"
              className="fab"
              color="primary"
            >
              <GetApp />
            </Fab>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
