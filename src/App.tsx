import React from 'react';
import './App.css';
import { ControlPanel } from './components/ControlPanel';
import { CardViewer } from './components/RecipeViewer';
import recipes from './assets/recipes.json';

function App():JSX.Element {
  return (
    <div className="App">
      <ControlPanel></ControlPanel>
      <CardViewer></CardViewer>
    </div>
  );
}

export default App;
