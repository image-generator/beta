import React, { useState } from 'react';
import api from './services/api';
import Canvas from './Components/Canvas';
import './App.css';

function App() {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [verticalPosition, setVerticalPosition] = useState('');
  const [horizontalPosition, setHorizontalPosition] = useState('');

  const pixabayKey = '8387701-5e4e7d3a7ec1162dbcc87ac47';

  async function handleImageBackground() {
    const response = await api.get(`?key=${pixabayKey}&q=yellow+flowers&image_type=photo&pretty=true`);
    console.log(response.data);
  };

  return (
    <div className="App">

      <header className="header">
        <button onClick={() => handleImageBackground()}>Buscar na API Backgrounds</button>
        <div className="group">
          <label>Título</label>
          <input onChange={e => setTitle(e.target.value)} type="text" value={title} />
        </div>
        <div className="group">
          <label>Subtítulo</label>
          <input onChange={e => setSubtitle(e.target.value)} type="text" value={subtitle} />
        </div>
        <div className="group">
          <label>Texto Vertical</label>
          <select onChange={e => setVerticalPosition(e.target.value)} type="text" value={verticalPosition}>
            <option value="">Selecione a posição</option>
            <option value="flex-start">Em cima</option>
            <option value="center">No centro</option>
            <option value="flex-end">Em baixo</option>
          </select>
        </div>
        <div className="group">
          <label>Texto Horizontal</label>
          <select onChange={e => setHorizontalPosition(e.target.value)} type="text" value={horizontalPosition}>
            <option value="">Selecione a posição</option>
            <option value="left">Na esquerda</option>
            <option value="center">No centro</option>
            <option value="right">Na direita</option>
          </select>
        </div>
      </header>

      <Canvas
        title={title}
        subtitle={subtitle}
        verticalPosition={verticalPosition}
        horizontalPosition={horizontalPosition}
      />
    </div>
  );
}

export default App;
