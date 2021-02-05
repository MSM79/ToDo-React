import React from 'react';
import { Card, Checkbox, Row, Col } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import './style.css';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function Todo(props) {
const {
    title,
    description,
    time,
  } = props;

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Edit
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          Delete
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Card style={{ width: 350, marginTop: 16 , height: 92}} id="cardTodo">
      <Row gutter={18} align="middle">
      <Col md={2} xl={2} sm={2}>
        <Checkbox onChange={onChange}></Checkbox>
      </Col>
      <Col md={12} xl={14} sm={14} xs={14}>
        <span class="spantitle">{title}</span>
      </Col>
      <Col md={9} xl={8} sm={8} push={5}>
        <Dropdown overlay={menu} placement="bottomRight" className="drop" arrow>
          <Button><i class="fas fa-ellipsis-v"></i></Button>
        </Dropdown>
      </Col>
      </Row>
      <Row>
        <Col md={18} xl={18} sm={18} xs={18} push={2}>
          <p class="des">{description}</p>
        </Col>
        <Col md={4} xl={6} sm={6} xs={6} push={3}>
          <span class="date">{time}</span>
        </Col>
      </Row>

    </Card>
  )
}

export default Todo;
