import React, { useEffect } from 'react';
import Counter from './components/Counter';
import './styles/App.css';

function App() {
  useEffect(
    () => {
      document.title = "Simple Counter"
    },
    []
  );

  return (
    <>
    <h1>Simple Counter</h1>
    <div className="container">
      <Counter gap={5}/>
      <Counter bgColor="tomato"/>
      <Counter gap={-5} bgColor="forestgreen"/>
    </div>
    </>
  );
}

export default App;
