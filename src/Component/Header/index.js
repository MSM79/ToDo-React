import React from 'react';
import { Row, Col } from 'antd';
import AddTodo from '../AddTodo';
import './style.css';


function Header() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

  const date = new Date();

  return (
    <Row justify="space-around" align="middle" id="headerow">
      <Col>
        <h1>ToDo</h1>
      </Col>

      <Col>
        <AddTodo />
      </Col>

      <Col>
        <p class="time">{ weekday[date.getDay()] + ',' +monthNames[date.getMonth()] + ' ' + date.getDay()}</p>
      </Col>
    </Row>
  )
}

export default Header;
