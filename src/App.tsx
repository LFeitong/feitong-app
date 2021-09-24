import React from 'react';
import './App.css';
import { ControlPanel } from './components/ControlPanel';
import { CardViewer } from './components/RecipeViewer';
import recipes from './assets/recipes.json';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,Row } from 'react-bootstrap';

function App():JSX.Element {
  return (
    <Container className="App">
      <Row>
      <ControlPanel></ControlPanel>
      <CardViewer></CardViewer>
      </Row>
    </Container>
  );
}

export default App;
