import React from 'react';
import { Card, Avatar } from 'antd';
import './style.css';


function Todo() {
  const { Meta } = Card;
  return (
    <Card style={{ width: 300, marginTop: 16 , height: 85}} id="cardTodo">
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
  )
}

export default Todo;
