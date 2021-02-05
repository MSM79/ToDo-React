import React from 'react';
import Todo from './Component/Todo';
import Header from './Component/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div class="todo">
        <Todo
          title="Mesvak"
          description="Bayad Mesvak Bezanam"
          time="10:15"
         />
        <Todo
        title="Game"
        description="blueblueblue"
        time="11:00"
        />
        <Todo
          title="Coding"
          description="Todoye Binamoos"
          time="7:07"
        />
      </div>
    </div>
  )
}

export default App;
