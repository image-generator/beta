import React, { useState } from 'react';
import CompositionScreen from './Components/Canvas';
import './App.css';

function App() {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [verticalPosition, setVerticalPosition] = useState('');
  const [horizontalPosition, setHorizontalPosition] = useState('');

  return (
    <div className="App">

      <header>
        <div className="group">
          <label>Título</label>
          <input onChange={e => setTitle(e.target.value)} type="text" value={title} />
        </div>
        <div className="group">
          <label>Subtítulo</label>
          <input onChange={e => setSubtitle(e.target.value)} type="text" value={subtitle} />
        </div>
        <div className="group">
          <label>Posição Vertical</label>
          <select onChange={e => setVerticalPosition(e.target.value)} type="text" value={verticalPosition}>
            <option value="">Selecione</option>
            <option value="flex-start">Topo</option>
            <option value="center">Meio</option>
            <option value="flex-end">Baixo</option>
          </select>
        </div>
        <div className="group">
          <label>posição Horizontal</label>
          <select onChange={e => setHorizontalPosition(e.target.value)} type="text" value={horizontalPosition}>
            <option value="">Selecione</option>
            <option value="left">Esquerda</option>
            <option value="center">Centro</option>
            <option value="right">Direita</option>
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
