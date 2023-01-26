import React from 'react';
import './App.css';
import ListItems from './compoents/ListItems';
import TextInput from './compoents/TextInput';

function App() {
  
  return (
    <div className='container'>
      <div className='heading'>
      <h1>To-Do List using redux</h1>
      </div>
     <TextInput />
      <ListItems />
    </div>
  );
}

export default App;
