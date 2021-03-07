import React from 'react';
import {Input, Col, Row, Badge, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.css';

class MenuDrawer extends React.Component {

  render() {
    const { Search } = Input;
    const onSearch = value => console.log(value);
    const date = new Date();
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


    return (
      <Col className="menu">

        <Row>
          <div className="menuRowInfo">
            <Col span={24}>
              <Badge count={5}>
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
             </Badge>
            </Col>
            <div>
                <h2 class="name">Mohammad Marandi</h2>
            </div>
            <div>
                <span class="email">Mohammadmarandi@gmail.com</span>
            </div>
          </div>
        </Row>


        <Row className="Rowbot">
            <Col className="menuItem">
              <Search placeholder="Search..." onSearch={onSearch} style={{ width: 200 }} className="search" />
            </Col>
            <Col className="menuItem">
              <a href="#">Completed</a>
            </Col>
            <Col className="menuItem">
              <a href="#">NotCompleted</a>
            </Col>
            <Col style={{marginTop:150}}>
              <p class="timetitle">Today's schedule</p>
              <p class="time">{ weekday[date.getDay()] + ',' + monthNames[date.getMonth()] + ' ' + date.getDate() }</p>
            </Col>
        </Row>
      </Col>
    )
  }
}

export default MenuDrawer;
