import React, { useState, useEffect } from "react";
import { IconButton, Fab } from "@material-ui/core";
import { Create, GetApp } from "@material-ui/icons";
import shortid from "shortid";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import domtoimage from "dom-to-image";

import api from "../services/api";
import SelectOrientation from "../Components/SelectOrientation";
import SelectCategories from "../Components/SelectCategories";
import SelectBackground from "../Components/SelectBackground";
import TextContainer from "../Components/TextSetup/TextContainer";
import FilterSetup from "../Components/FilterColor/FilterSetup";
import FilterOverlay from "../Components/FilterColor/FilterOverlay";
import DragAndDropText from "../Components/TextSetup/DragAndDropText";
import { categoriesToQuery } from "../utils/categoriesToQuery";
import Add from "@material-ui/icons/Add";

import { pixabayKey } from "../config";

import "./styles.css";
import "rc-color-picker/assets/index.css";

function Main() {
  const [showSelectOrientation, setShowSelectOrientation] = useState(true);
  const [showModalCategories, setShowModalCategories] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [showModalBackground, setShowModalBackground] = useState(false);

  const [backgrounds, setBackgrounds] = useState("");
  const [orientation, setOrientation] = useState("");

  // Painel
  const [panel, setPanel] = useState({
    filter: true,
    text: false
  });
  const [texts, setTexts] = useState([]);
  const [filterColor, setFilterColor] = useState("#FFF");
  const [filterOpacity, setFilterOpacity] = useState(0.2);

  useEffect(() => {
    localStorage.setItem("background", "");
  }, []);

  async function handleImageBackground(data) {
    if (backgrounds === "") {
      const response = await api.get(
        `?key=${pixabayKey}&q=${categoriesToQuery(
          data.selectedOption
        )}&orientation=${orientation}&image_type=photo&pretty=true`
      );
      setBackgrounds(response.data.hits);
      setShowModalBackground(true);
      setShowPanel(true);
    }
  }

  const handleDownload = () => {
    domtoimage
      .toJpeg(document.getElementById("download"), { quality: 0.95 })
      .then(function(dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  const handleOrientation = orientation => {
    setOrientation(orientation);
    setShowSelectOrientation(false);
    setShowModalCategories(true);
  };

  const handleCloseBackgrounds = () => {
    setShowModalBackground(false);
    setShowModalCategories(false);
  };

  const reset = () => {
    setShowSelectOrientation(true);
  };

  const handlePanel = name => event => {
    setPanel({ ...panel, [name]: event.target.checked });
  };

  const handleFilterColor = color => {
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
      title: "Novo texto...",
      color: "#000000",
      fontSize: 16,
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none"
    };

    setTexts([...texts, newText]);

    if (!panel.text) {
      setPanel({ ...panel, text: true });
    }
  };

  return (
    <div className="App">
      <button onClick={reset} className="reset">
        Nova Imagem
      </button>

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
                <span className="aside-title-text">
                  Textos
                  <IconButton
                    onClick={handleAddText}
                    color="primary"
                    aria-label="add to shopping cart"
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
            </aside>

            <div className="panel">
              <div
                id="download"
                className={`${"canvas"} ${
                  orientation === "horizontal" ? "portrait" : "landscape"
                }`}
                style={{
                  background: `url('${localStorage.getItem("background")}')`,
                  backgroundSize: "cover"
                }}
              >
                {panel.filter && (
                  <FilterOverlay color={filterColor} opacity={filterOpacity} />
                )}

                {panel.text && (
                  <DndProvider backend={Backend}>
                    <DragAndDropText texts={texts} setTexts={setTexts} />
                  </DndProvider>
                )}
              </div>
            </div>

            <Fab
              onClick={handleDownload}
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

export default Main;
