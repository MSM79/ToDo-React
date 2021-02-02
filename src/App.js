import React from 'react';
import Todo from './Component/Todo';
import Header from './Component/Header';
import { Row, Col } from 'antd';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div class="todo">
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  )
}

export default App;
