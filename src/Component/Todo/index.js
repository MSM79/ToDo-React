import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import OneTodo from '../../OneTodo';
import './style.css';

function Todo() {
  const todos = useSelector((state) => state.todo);

  return (
    <Col>
      {todos.map((todo, i) => (
        <Row>
          <OneTodo todo={todo} />
        </Row>
      ))}
    </Col>
  );
}

export default Todo;
