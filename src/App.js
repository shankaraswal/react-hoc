import React,  { Component } from 'react';
import './App.css'
import ShankarHoc from './HOC/WrappedComponents/ShankarHoc'
import KukuHoc from './HOC/WrappedComponents/KukuHoc'
import NikkuHoc from './HOC/WrappedComponents/NikkuHoc'


function App() {
  return (
    <div className="App">
        <ShankarHoc />
        <KukuHoc />
        <NikkuHoc />
    </div>
  );
}

export default App;
